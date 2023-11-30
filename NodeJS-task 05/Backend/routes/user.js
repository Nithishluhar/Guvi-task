import express from "express";
import bcrypt from "bcrypt"
import { userModel } from "../models/users.js";
import crypto from "crypto";
import { TokenModel } from "../models/token.js";
import { sendEmail } from "../utils/sendEmail.js";


const routes = express.Router();

routes.post("/register", async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.body.email })
        if (user) {
            return res.status(409).send({ message: "User already exists" })
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        user = await new userModel({ ...req.body, password: hashPassword }).save();

        const token = await new TokenModel({
            userId: user.id,
            token: crypto.randomBytes(16).toString("hex")
        }).save();
        const url = `${process.env.BASE_URL}user/${user.id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);

        res.status(201).send({ message: "An Email sent to your account please verify" })
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
            return res.status(401).send({ message: "Invalid Password" })
        }

        if (!user.verified) {
            let token = await TokenModel.findOne({ userId: user._id })
            if (!token) {
                const token = await new TokenModel({
                    userId: user.id,
                    token: crypto.randomBytes(16).toString("hex")
                }).save();
                const url = `${process.env.BASE_URL}user/${user.id}/verify/${token.token}`;
                await sendEmail(user.email, "Verify Email", url);
            }
            return res.status(400).send({ message: "An Email sent to your account please verify" })
        }

        const token = user.generateToken();
        res.status(200).json({ data: token, message: "logged in ✔️" })
    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})

routes.get("/:id/verify/:token", async (req, res) => {
    try {
        let user = await userModel.findOne({ _id: req.params.id })
        if (!user) {
            return res.status(400).send({ message: " Invalid Link " })
        }
        const token = await TokenModel.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) {
            return res.status(400).send({ message: "invaild link" })
        }
        await userModel.updateOne({ _id: user._id }, { verified: true })
        // await token.remove()
        res.status(200).send({ message: "Email verified successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" })

    }
})



export const userRoute = routes;