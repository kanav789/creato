import UserModel from "../models/UserModel.js";
import { GenerateToken } from "../utility/TokenFunc.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //   check if user already exists
    const existingUser = await UserModel.findOne({
      email,
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    } else {
      const newUser = await UserModel.create({
        name,
        email,
        password,
      });

      const token = GenerateToken(newUser.email);

      return res.status(201).json({
        message: "User registered successfully",
        user: newUser,
        token,
      });
    }
  } catch (error) {
    console.log("Error in registerUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    //   check if user exists
    const existingUser = await UserModel.findOne({
      email,
      password,
    });
    if (existingUser) {
      const token = GenerateToken(existingUser.email);

      return res
        .status(200)
        .json({ message: "Login successful", user: existingUser, token });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log("Error in loginUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
