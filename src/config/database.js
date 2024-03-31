import mongoose from "mongoose";
import "dotenv/config";

export async function connectBd() {

    try {
        await mongoose.connect(process.env.DATABASE_URI);
        console.log("Mongo db Atlas Connected!")
    } catch (err) {
        console.log(err.message)
    }
};

export async function disconnectDb() {
    await mongoose.disconnect();
};