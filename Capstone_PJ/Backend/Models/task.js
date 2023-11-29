import mongoose from "mongoose";



const taskSchema = new mongoose.Schema({
     
    title:{type: String , require: true},
    description:{type: String , require: true},
    completed: {type: Boolean , default: false },
    link:{ type: String},
    owner: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user' , //this is a reference to the User model in our app
        required: true
    }
    
},{
    timestamps: true
})

const TaskModel = mongoose.model("Task", taskSchema);

export { TaskModel }