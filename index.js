const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');
const path = require('path');

const ResumepdfTemplate = require('./documents/ResumeTemplate1');
const CVpdfTemplate = require('./documents/CVTemplate1');

const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// POST Route - PDF generation and fetching of the data

app.post('/create-Resumepdf1', (req, res) => {
    pdf.create(ResumepdfTemplate(req.body), {}).toFile('Resume1.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
    });
    console.log('Hello');
});

app.post('/create-CVpdf1', (req, res) => {
    pdf.create(CVpdfTemplate(req.body), {}).toFile('CV1.pdf', (err) => {
        if(err){
            res.send(Promise.reject());
            console.log(err);
        }

        res.send(Promise.resolve());
    });
    console.log('Hello');
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


app.listen(port, () => console.log(`Server started on port ${port}`));