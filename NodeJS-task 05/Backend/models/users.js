import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    verified: { type: Boolean, default: false },
    role: {
        type: String,
        default: "visitor"
    }
})
UserSchema.methods.generateToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, { expiresIn: "2h", })
    return token;
};


const userModel = mongoose.model("User", UserSchema);

export { userModel }