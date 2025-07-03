import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.MONGO_URL;

export const connectionDb = async () => {
    try {
        await mongoose.connect(URL);
        console.log(`MONGODB CONNECTED`);
    } catch (err) {
        console.log("Mongo Connection failed:", err.message);
    }
};