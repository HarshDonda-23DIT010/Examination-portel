import mongoose from "mongoose";


export const connectionDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MONGODB CONNECTED`);
    } catch (err) {
        console.log("Mongo Connection failed:", err.message);
    }
};