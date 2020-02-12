
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "hostORG",
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
        to: "youremailID", //use your registered mailgun id here
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