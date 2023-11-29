import mongoose from "mongoose";

export function dateBaseConnetion() {

    try {
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB conneted");
    } catch (error) {
        console.log("failed", error);
    }
}