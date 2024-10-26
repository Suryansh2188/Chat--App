import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, trim: true }, // Full name of the user
        email: { type: String, required: true, unique: true }, // Unique email used for login
        password: { type: String, required: true, trim: true }, // Hashed password stored for security
        avatar: { type: String, default: null }
    },
    { timestamps: true } // Created and updated timestamps
);

export default mongoose.model("User", userSchema);