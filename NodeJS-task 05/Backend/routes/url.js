import express from "express";
import { findAlldata, handleGenerateShortURL, handleTotalClick } from "../controllers/url.js";
import { URL } from "../models/url.js";


const routes = express.Router();


routes.get('/data', async (req, res) => {
    try {
        const urlData = await findAlldata();
        if (!urlData || urlData.length <= 0) {
            return res.status(404).json({ message: "no content available" })
        }
        res.status(201).json(
            urlData
        )
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal server error" })
    }
})

routes.post('/', handleGenerateShortURL);

routes.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId }, {
        $push: {
            visitHistory: {
                timestamp: Date.now(),
            }
        }
    }
    )
    res.redirect(entry.redirectURL);
});

routes.get('/analytics/:shortId', async (req, res) => {
    const result = await handleTotalClick(req)
    if (!result) {
        res.status(401).json({ message: "Invalid Short ID" })
    } else {
        res.json({
            totalClickes: result.visitHistory.length,
            analytics: result,
        })
    }
});





export const urlRoute = routes;