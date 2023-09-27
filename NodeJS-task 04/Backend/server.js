const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer')


//import
const UserModel = require("./models/Users");

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
const DB_URL = process.env.DB_URL;
app.use(cors());


// connet to mongoose
mongoose
    .connect(DB_URL, {})
    .then(() => console.log("conected to mongoDB"))
    .catch((err) => console.log("could not connect to  mongoDb", err));


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new UserModel({ name, email, password: hashedPassword })
    try {
        await user.save();
        res.json({ message: "user registered ✔️" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error⌛‼️" })
    }
})

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(403).json({ mess: "user not found" })
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(403).json({ mess: "wrong pass" });
    };
    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    });
    res.json({ token })
})
app.get('/dashboard', (req, res) => {
    res.json({ message: 'protected resource accessed ✔️' })
})

app.post('/reset', async (req, res) => {
    const { email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
        return res.status(403).json({ mess: "user not existed" })
    }
    // const hashedPassword = await bcrypt.hash(password, 10);
    const token = jwt.sign({ email: user.email }, process.env.SECRET_KEY, {
        expiresIn: "30m"
    });


    var transporter =  nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'nithishns7676@gmail.com',
          pass: process.env.PASS
        }
      });
      
      var mailOptions = {
        from: 'nithishns7676@gmail.com',
        to: 'nithishluhar2606@gmail.com',
        subject: 'reset your password',
        text:` http://localhost:5173/reset_password/${user.id}/${token}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
          return res.send({status: "success"})
        }
      });

})

app.post('/reset_password/:id/:token', async(req,res ) =>{
    // const id=parseInt(req.params.userId)
    // const resetToken=req.params.token
    const{id,token}=req.params;
    const {password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
      jwt.verify(token,process.env.SECRET_KEY,(err, decoded) =>{
        if(!decoded || err ){
            return   res.status(403 ).json("invalid or expired link")
            }else{
                UserModel.findByIdAndUpdate(id,{password:hashedPassword})
                .then(u => res.send({status: "success"}))
                .catch(err => res.send({status:  err}))
            }
      })
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})