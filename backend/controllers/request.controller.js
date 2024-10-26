import requestModel from "../models/request.model.js";


export const allRequest = async (req, res) => {
    const receiverId = req.userId;
    try {
        const requests = await requestModel.find({ receiverId }).populate("senderId", "-password");
        res.status(200).json(requests)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" })
    }
}

export const sendRequest = async (req, res) => {
    const senderId = req.userId;
    const receiverId = req.body.receiverId;
    try {
        const existingRequest = await requestModel.findOne({ receiverId });
        if (existingRequest) {
            return res.status(409).json({ message: "Request Already Exist" })
        }

        const newRequest = await requestModel.create({ receiverId, senderId })
        return res.status(201).json({ message: "Request Sent Successfully" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
}