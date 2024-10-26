import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },

    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    lastMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message", default: null },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
}, { timestamps: true });


export default mongoose.model("Chat", chatSchema);