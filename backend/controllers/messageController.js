import chatModel from "../models/chat.model.js"
import messageModel from "../models/message.model.js"

export const newMessage = async (req, res) => {
    const userId = req.userId;
    const { chatId, content } = req.body;
    try {
        const chat = await chatModel.findById(chatId)
        if (!chat) return res.status(404).json({ message: "Chat not Found" });
        const message = await messageModel.create({ chatId, senderId: userId, content, seenBy: [userId] })
        await chatModel.findByIdAndUpdate(
            chatId, // No need to wrap it in { _id: chatId }
            {
                $set: { lastMessage: message._id }, // Update lastMessage to the new message ID
                $addToSet: { messages: message._id },
            },
            { new: true } // Return the updated chat document
        );
        // await Chat.findByIdAndUpdate(
        //     chatId,
        //     { $addToSet: { seenBy: userId } }, // Add userId to 'seenBy' without duplicates
        //     { new: true } // Ensure the updated chat is returned
        // );
        res.status(201).json(message)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}