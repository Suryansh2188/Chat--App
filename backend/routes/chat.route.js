import express from 'express'
import { verifyToken } from "../middlewares/verifyToken.js";
import { createChat, getChat, getChats } from '../controllers/chat.controller.js';
const router = express.Router();

router.get('/', verifyToken, getChats);
router.get('/:chatId', verifyToken, getChat);
router.post('/newChat', verifyToken, createChat);
router.post("/newMess", verifyToken,)



export default router