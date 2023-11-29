import dotenv from "dotenv";
import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import { dateBaseConnetion } from "./bd.js";
import { userRoute } from "./Routes/user.js";
import { taskRoute } from "./Routes/task.js";


dotenv.config();

dateBaseConnetion()  //database

const app = express();
const PORT = process.env.PORT || 6000

// middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/user', userRoute)
app.use('/task', taskRoute)


app.get("/" ,(req, res) =>{
    return res.json({message: "heloo"})
})

app.listen(PORT, () => console.log(`server in port ${PORT}`))