import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import connectDb from "./db/Db.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());


// JSON parser only for routes that need it
app.use("/api", express.json());

connectDb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// import routes
import authRoutes from "./routes/AuthRoutes.js";
import profileRoutes from "./routes/ProfileRoutes.js";
import generatedRoutes from "./routes/GeneratedRoute.js";
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/profile", generatedRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
