import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const GenerateToken = (useremail) => {
  try {
    const token = jwt.sign(useremail, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    console.error("Error generating token:", error);
    throw new Error("Token generation failed");
  }
};

export const VerifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error("Token verification failed");
  }
};
