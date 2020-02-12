const express = require("express");
const path = require("path")
const sendMail = require('./app');
const app = express();
const PORT = 8080;




//Data Parsing
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json());

app.post("/email", (req,res) => {
    //Send Email Here!
    const {subject, email, text} = req.body;
    console.log('Data:', req.body);

    sendMail(email, subject, text, function(err,data){
        if(err){
            res.status(500).json({message: 'Internal Error'});           
        } else {
            res.json({message: 'Email Sent.'})
            
        }
    })
    // console.log('Data:', req.body)   
    // res.json({message: "Message Recieved"})
    
})

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"views","index.html"))
})

app.listen(PORT, console.log("Server is running at " +PORT)
);