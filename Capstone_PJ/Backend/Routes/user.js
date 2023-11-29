import express from "express";
import bcrypt from "bcrypt"
import { userModel } from "../Models/user.js";
import JWT from "jsonwebtoken";


const routes = express.Router();


routes.post("/register", async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(409).send({ message: "User already exists" })
        }
        const salt =  await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        user = await new userModel({ ...req.body, password: hashPassword }).save();
        
        res.status(201).send({user , message : "user registed"})
        

    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})


routes.post("/login", async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(409).send({ message: " Invalid Eamil " })
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({message:"Invalid Password"})
        }

        const token = JWT.sign({_id: user._id.toString()},process.env.SECRET_KEY)
        res.status(200).json({ data: token, message: "logged in ✔️",name:user.name })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})




export const userRoute = routes;