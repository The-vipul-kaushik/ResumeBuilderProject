const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');
const signupSchema = require('./SignUpmodel');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

dotenv.config();

const pdfTemplate = require('./documents');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true});
const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Database connected");
}).catch(err => {
    console.log("Connection failed");
});

// POST Route - PDF generation and fetching of the data
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('Resume.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
        console.log('Success');
    });
});

app.post('/SignUp',async (req,res) => {
    //creating new instance every time

    const {firstName, lastName, email, password} = req.body;

    if(!email || !password){
        return res.status(422).json({error: 'All fields are required'});
    }

    try {
        const saltedpassword = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(password, saltedpassword);
        const signupschema = new signupSchema({
            firstName,
            lastName,
            email,
            password: securePassword
        });

        const userExist = await signupSchema.findOne({email: email}).exec();
        if(userExist==null){
            signupschema.generateAuthToken();
            res.json({message: 'success'});
        }
        else{
            res.status(409).json({error: 'User already exist'});
        }
    } catch (error) {
        console.log(error);
    }
});

app.post('/SignIn',async (req,res) => {
    const {email, password} = req.body;

    if(!email || !password){
        return res.status(422).json({error: 'All fields are required'});
    }

    try {
        const userExist = await signupSchema.findOne({email: email}).exec();
        if(userExist){
            const isMatch = await bcrypt.compare(password, userExist.password);
            if(isMatch){
                const token = userExist.tokens[0].token;
                res.status(200).json({message: token});
            }
            else{
                res.status(403).json({error: 'Incorrect Password'});
            }
        }
        else{
            res.status(404).json({error: 'Invalid Credentials'});
        }
    } catch (error) {
        console.log(error);
    }
});

// Get - Send generated pdf to the client
app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/Resume.pdf`);
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Server started on port ${port}`));