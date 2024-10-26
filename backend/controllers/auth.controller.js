import userModel from "../models/user.model.js";
import bcrypt from "bcrypt"; // Add bcrypt for password hashing
import { generateToken } from "../config/jwt.js";

//Register Controller
export const register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // Check for missing fields
        if (!username || !password || !email) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        // Check if the user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });

        // Send success response
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error, please try again later." });
    }
};

//Login Controller
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(400).json({ message: "All fields are require" });

        const user = await userModel.findOne({ email })
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        user.password = undefined;
        const token = generateToken(user._id)
        res.cookie("token", token, {
            httpOnly: true,
            //secure:true
            maxAge: 1000 * 60 * 60 * 24 * 7
        }).status(200).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error, please try again later." })
    }
}

//Logout Controller
export const logout = async (req, res) => {
    try {
        // Clear the cookie and send the response
        res.clearCookie("token", { httpOnly: true, sameSite: 'strict' }) // Optional: add cookie options
            .status(200)
            .json({ message: "Logout successfully" });
    } catch (error) {
        console.error("Logout error:", error); // Improved logging
        res.status(500).json({ message: "Server error, please try again later." });
    }
};
