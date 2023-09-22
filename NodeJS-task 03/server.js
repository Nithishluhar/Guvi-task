const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser")

require("dotenv").config();
// import 
const Mentor = require("./Model/mentor");
const Student = require("./Model/student");


const app = express();
app.use(bodyParser.json());


const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

// connet to mongoose
mongoose
    .connect(DB_URL, {})
    .then(() => console.log("conected to mongoDB"))
    .catch((err) => console.log("could not connect to  mongoDb", err))

app.post('/mentor', async (req, res) => {
    try {
        const mentor = new Mentor(req.body);
        await mentor.save()
        res.send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.post('/student', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save()
        res.send(student);
    } catch (error) {
        res.status(400).send(error);
    }
})

//asssign   
app.post("/mentor/:mentorID/assign", async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.mentorID)
        const students = await Student.find({ '_id': { $in: req.body.students } });
        students.forEach(student => {
            student.cMentor = mentor._id;
            student.save();
        });
        mentor.students = [...mentor.students, ...students.map(student => student.id)]
        await mentor.save();
        res.status(200).send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
})

//  🪄assign and change cMentor and pMentor then students list in mentor documents also updated ✔️📌
app.put("/student/:studentId/assignMentor/:MentorId", async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId)
        const nMentor = await Mentor.findById(req.params.MentorId);
      
        await Mentor.updateOne({ _id: new mongoose.Types.ObjectId(req.params.MentorId) }, { $push: { students: new mongoose.Types.ObjectId(req.params.studentId) } })

        let responce = await Mentor.updateOne({ _id: new mongoose.Types.ObjectId(student.cMentor) }, { $pull: { students: new mongoose.Types.ObjectId(req.params.studentId) } })

        console.log(req.params.MentorId,req.params.studentId,responce);
       
        if (student.cMentor) {
            student.pMentor.push(student.cMentor);

        }
        student.cMentor = nMentor._id;
        await student.save();
        res.status(200).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
})

// show all students for a particular mentor
app.get("/mentor/:mentorId/students", async (req, res) => {
    try {
        const mentor = await Mentor.findById(req.params.mentorId).populate("students");
        res.send(mentor.students);
    } catch (error) {
        res.status(400).send(error);
    }
})

// show all the previously assigned mentors  for a particular student
app.get("/student/:studentId/mentors", async (req, res) => {
    try {
        const student = await Student.findById(req.params.studentId).populate("pMentor");
        res.send(student.pMentor);
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})