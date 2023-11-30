import mongoose from "mongoose";
import dotenv from "dotenv";



//config
dotenv.config();

export async function dateBaseConnetion() {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB conneted");
    } catch (error) {
        console.log("failed", error);
    }
}