import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { allRequest, sendRequest } from "../controllers/request.controller.js";

const router = express.Router();

router.get('/', verifyToken, allRequest)
router.post('/send', verifyToken, sendRequest)

export default router;