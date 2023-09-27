const mongoose  = require('mongoose');

const  UserSchema    = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type : String,
        default: "visitor"
    }
})

const userModel = mongoose.model("User", UserSchema);

module.exports=userModel;