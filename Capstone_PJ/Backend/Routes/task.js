import express from "express";

import { Authorization } from "../Middleware/auth.js";
import { TaskModel } from "../Models/task.js";
import { userModel } from "../Models/user.js";

const routes = express.Router();

routes.get('/test', Authorization, (req, res) => {
    res.json({
        message: "Task routes",
        user: req.user
    })
})
routes.post('/create', Authorization, async (req, res) => {
    try {
        const task = new TaskModel({
            ...req.body,
            owner: req.user._id
        });
        await task.save()
        res.status(201).json({ task, message: "created" });

    } catch (error) {
        res.status(500).send({ message: "Internal server error", error })
    }
})

// get user tasks
routes.get('/', async (req, res) => {
    try {
        const tasks = await TaskModel.find({})
        // res.status(200).json({ tasks, count: tasks.length, message: "Tasks Fetched Successfully" });
        res.status(200).json( tasks);
    }
    catch (err) {
        res.status(500).send({ error: err });
    }
});

// update link 
routes.put("/update/:id", async (req, res) => {
    try {
        let task = await TaskModel.findByIdAndUpdate(req.params.id, { completed: true }, { new: true });
        task = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!task) return res.status(404).send("No task found");
        res.status(200).send("updated");
        


    } catch (error) {
        res.status(500).send({ error });
    }
})

// find done task
routes.get('/done', async (req, res) => {
    try {
        const tasks = await TaskModel.find({
            completed: true
        }).sort('-date')
        res.status(200).json(
            tasks
        );
    } catch (err) {
        res.status(500).send({ error: err });
    }
})
// find done task
routes.get('/pending', async (req, res) => {
    try {
        const tasks = await TaskModel.find({
            completed: false
        }).sort('-date')
        res.status(200).json(
            tasks
        );
    } catch (err) {
        res.status(500).send({ error: err });
    }
})


export const taskRoute = routes