import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { newMessage } from "../controllers/messageController.js";

const router = express.Router();

router.post('/', verifyToken, newMessage)


export default router