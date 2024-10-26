import mongoose from "mongoose";

const DbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to MongoDB')
    } catch (error) {
        console.log("No connected to MongoDB");
    }
}

export default DbConnection;