import userModel from "../models/user.model.js";

export const searchUser = async (req, res) => {
    console.log(req.query.search);
    try {
        const keyword = req.query.search ? {
            $or: [
                { username: { $regex: req.query.search, $options: 'i' } },
                { email: { $regex: req.query.search, $options: 'i' } },
            ],
        } : {};

        const users = await userModel.find(keyword).select('username _id');
        console.log(users)
        if (users.length > 0) {
            res.status(200).json(users)
        } else {
            res.status(200).json({ message: "User Not Found" })
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}