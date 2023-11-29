import jwt from "jsonwebtoken";
import { userModel } from "../Models/user.js";




const Authorization = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
       
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const user = await userModel.findOne({
            _id: decoded._id,
        })

        if (!user) {
            throw new Error('Unable to login , invalid credentials');
        }

        req.user = user;
        req.token = token;
        next();

    }
    catch (error) {
        res.status(401).send({ error: error.message });
    }
}

export { Authorization }