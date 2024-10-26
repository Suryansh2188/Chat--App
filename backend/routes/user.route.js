import express from "express";
import { verifyToken } from "../middlewares/verifyToken.js";
import { searchUser } from "../controllers/user.controller.js";


const router = express.Router();
router.get('/', verifyToken, searchUser);


export default router;