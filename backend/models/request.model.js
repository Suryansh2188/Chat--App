import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // id of the user who sent the request
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
})

export default mongoose.model("Request", requestSchema);