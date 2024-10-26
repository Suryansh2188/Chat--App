import chatModel from '../models/chat.model.js'


export const getChats = async (req, res) => {
    const userId = req.userId;
    try {
        const chats = await chatModel.find({ senderId: userId }).populate("receiverId lastMessage", "-password")
        res.status(200).json(chats);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });

    }
}

export const getChat = async (req, res) => {
    const senderId = req.userId;
    const chatId = req.params.chatId
    try {
        const chat = await chatModel.findOne({ senderId, _id: chatId }).populate("lastMessage messages");
        // await Message.findByIdAndUpdate(
        //     chatId,
        //     senderId,
        //     { $addToSet: { seenBy: senderId } }, // Add senderId to seenBy if not present
        //     { new: true } // Return the updated document
        // );
        res.status(200).json(chat);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server Error" });
    }
}

export const createChat = async (req, res) => {
    console.log(req.body)
    const senderId = req.userId;
    const { receiverId } = req.body;
    try {
        const newChat = await chatModel.create({ receiverId, senderId });
        res.status(201).json(newChat);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Chat is not create" });
    }
}