require('dotenv').config();
var express = require('express'),
    // path = require('path'),
    nodeMailer = require('nodemailer');

var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT;
var IP = process.env.IP;


app.get('/', function(req, res) {
    res.render('index');
});
app.post('/send-email', function(req, res) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAILPW
        }
    });
    let mailOptions = {
        from: '"Techstudio DN" <debasisnath84@gmail.com>', // sender address
        to: req.body.to, // list of receivers
        subject: req.body.subject, // Subject line
        text: req.body.body, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });
});

app.listen(port, IP, function(req, res) {
    console.log('Server is running at port: ', port);
});
