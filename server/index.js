const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');
const signupSchema = require('./SignUpmodel');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const {v4 : uuidv4} = require('uuid');

dotenv.config();

const ResumepdfTemplate = require('./documents/ResumeTemplate1');
const CVpdfTemplate = require('./documents/CVTemplate1');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Database connected");
}).catch(err => {
    console.log("Connection failed");
});

app.post('/create-Resumepdf1', (req, res) => {
    pdf.create(ResumepdfTemplate(req.body), {}).toFile('Resume1.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
    });
});

app.post('/create-CVpdf1', (req, res) => {
    pdf.create(CVpdfTemplate(req.body), {}).toFile('CV1.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
    });
});

app.post('/GetResumeUrl',async (req,res) => {
    const {Url,ResumeName} = req.body;
    const cookietoken = req.cookies.jwttoken;
    try {
        const user = await signupSchema.findOne({tokens : {$elemMatch: {token: cookietoken}}}).exec();
        const ResumeUrl = {_id: uuidv4(),Url: Url};
        const ResumeTitle = {_id: uuidv4(),title: ResumeName}
        user.ResumeUrls.push(ResumeUrl);
        user.resumetitles.push(ResumeTitle);
        await user.save();
    } catch (error) {
        console.log(error)
    }
    
})

app.post('/GetCVUrl',async (req,res) => {
    const {Url,CVName} = req.body;
    const cookietoken = req.cookies.jwttoken;
    try {
        const user = await signupSchema.findOne({tokens : {$elemMatch: {token: cookietoken}}}).exec();
        const CVUrl = {_id: uuidv4(),Url: Url};
        const CVTitle = {_id: uuidv4(),title: CVName}
        user.CVUrls.push(CVUrl);
        user.cvtitles.push(CVTitle);
        await user.save();
    } catch (error) {
        console.log(error);
    }
    
})

app.get('/GetResume',async (req,res) => {
    const cookietoken = req.cookies.jwttoken;
    try {
        const user = await signupSchema.findOne({tokens : {$elemMatch: {token: cookietoken}}}).exec();
        if(user.ResumeUrls.length!=0 && user.resumetitles.length!=0){
            const urls = user.ResumeUrls;
            const titles = user.resumetitles;
            res.send({urls: urls,titles: titles});
        }
        else{
            res.status(404).json({message: 'No resume exist'});
        }
    } catch (error) {
        console.log(error);
    }
})

app.get('/GetCV',async (req,res) => {
    const cookietoken = req.cookies.jwttoken;
    try {
        const user = await signupSchema.findOne({tokens : {$elemMatch: {token: cookietoken}}}).exec();
        if(user.CVUrls.length!=0 && user.cvtitles.length!=0){
            const urls = user.CVUrls;
            const titles = user.cvtitles;
            res.send({urls: urls,titles: titles});
        }
        else{
            res.status(404).json({message: 'No CV exist'});
        }
    } catch (error) {
        console.log(error);
    }
})

app.post('/Delete',async (req,res) => {
    const {uid, rcid, rorcv} = req.body;
    const cookietoken = req.cookies.jwttoken;
    try {
        const user = await signupSchema.findOne({tokens : {$elemMatch: {token: cookietoken}}}).exec();
        if(rorcv){
            signupSchema.updateOne( 
                { _id: user._id },
                {
                    $pull: {
                        ResumeUrls: { _id : uid }
                    }
                },
                { safe: true },
                function removeConnectionsCB(err, obj) {
                    // ...
                }
            );
            signupSchema.updateOne( 
                { _id: user._id },
                {
                    $pull: {
                        resumetitles: { _id : rcid }
                    }
                },
                { safe: true },
                function removeConnectionsCB(err, obj) {
                    // ...
                }
            );
        }
        else{
            signupSchema.updateOne( 
                { _id: user._id },
                {
                    $pull: {
                        CVUrls: { _id : uid }
                    }
                },
                { safe: true },
                function removeConnectionsCB(err, obj) {
                    // ...
                }
            );
            signupSchema.updateOne( 
                { _id: user._id },
                {
                    $pull: {
                        cvtitles: { _id : rcid }
                    }
                },
                { safe: true },
                function removeConnectionsCB(err, obj) {
                    // ...
                }
            );
        }
        res.status(200).json({message: 'success'});
    } catch (error) {
        console.log(error);
    }
})

app.post('/SignUp',async (req,res) => {
    //creating new instance every time

    const {firstName, lastName, email, password} = req.body;

    if(!firstName || !lastName || !email || !password){
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
            const token = await signupschema.generateAuthToken();
            res.json({message: token});
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
app.get('/fetch-Resumepdf1', (req,res) => {
    res.sendFile(`${__dirname}/Resume1.pdf`);
});

app.get('/fetch-CVpdf1', (req,res) => {
    res.sendFile(`${__dirname}/CV1.pdf`);
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}


app.listen(port, () => console.log(`Server started on port ${port}`));