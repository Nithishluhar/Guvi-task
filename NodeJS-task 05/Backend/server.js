import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";

import { urlRoute } from "./routes/url.js";
import { dateBaseConnetion } from "./bd.js";
import cors from 'cors';
import { userRoute } from "./routes/user.js";
import { passwordRoute } from "./routes/resetPassword.js";


//config
dotenv.config();

dateBaseConnetion()  //database

const app = express();
const PORT = process.env.PORT || 5000

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/url", urlRoute);
app.use('/user', userRoute);
app.use('/user', passwordRoute);




app.listen(PORT, () => console.log(`server in port ${PORT}`))