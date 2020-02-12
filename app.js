
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "mailgun",
    port: 587,
    secure: false,
    auth: {
        user: "user",
        pass: "pass",
    },
});

function sendMail(email, subject, text){
    let mainOptions = {
        from: email,
        to: "xxxxx@sddfsd.com", //use your registered mailgun id here
        subject,
        text,
    }

    transporter.sendMail(mainOptions, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`mail sent ${info.response}`);
            
        }
    })
}

module.exports = sendMail;