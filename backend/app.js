import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import DbConnection from './config/db.connection.js';
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import requestRoute from './routes/request.route.js'
import chatRoute from './routes/chat.route.js'
import messageRoute from './routes/message.route.js'
import 'dotenv/config';

const app = express()
await DbConnection();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use('/', authRoute)
app.use('/user', userRoute);
app.use("/request", requestRoute);
app.use("/chat", chatRoute);
app.use("/newMessage", messageRoute);




app.listen(5000, console.log("Server running..."));