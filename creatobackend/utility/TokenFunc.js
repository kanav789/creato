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

export const VerifyToken = (email) => {
  try {
    const decoded = jwt.verify(email, process.env.JWT_SECRET);
    if (!decoded) {
      throw new Error("Invalid token");
    }
    return decoded;
  } catch (error) {
    console.error("Error verifying token:", error);
    throw new Error("Token verification failed");
  }
};
