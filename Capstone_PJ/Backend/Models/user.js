import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
     
    name:{type: String , require: true},
    email: {type: String , require: true , unique: true},
    password: {type: String , require: true},
    
})

const userModel = mongoose.model("User", UserSchema);

export { userModel }