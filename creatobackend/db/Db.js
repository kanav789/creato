import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL).then(() => {
      console.log("Connected to MongoDB successfully");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDb;
