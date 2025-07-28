import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/Db.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
// connect mongoDB
app.use(express.json()); // Middleware to parse JSON bodies
connectDb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// import routes
import authRoutes from "./routes/AuthRoutes.js";

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
