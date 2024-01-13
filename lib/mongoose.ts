import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) {
    return console.log("MONGODB_URL is missing");
  }

  if (isConnected) {
    return console.log("MONGODB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, { dbName: "devoverflow" });
    console.log("Successfully connected to MongoDB");
    isConnected = true;
  } catch (err: any) {
    console.log("Error connecting to Database: " + err.message);
  }
}
