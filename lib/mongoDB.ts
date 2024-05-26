import mongoose from "mongoose";

let isConnected: boolean = false;

const connectDB = async(): Promise<void> => {
    mongoose.set("strictQuery", true)

    if(isConnected) {
        console.log("Mongo DB is already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL || "" ,{
            dbName: "ecom"
        })

        isConnected = true;
        console.log("Mongo DB is connected")
    } catch (err) {
        console.log("mongo DB is not connected ::", err)
    }
}

export default connectDB;