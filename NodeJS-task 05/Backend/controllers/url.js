import shortid from 'shortid';
import { URL } from '../models/url.js'

export async function handleGenerateShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is requied" })
    const shortID = shortid();

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    })
    return res.status(200).json({ short_URl: shortID })
}
export function handleTotalClick(req) {
    const shortId = req.params.shortId;
    return URL.findOne({ shortId })
}
export function findAlldata() {
    return URL.find({})
}

