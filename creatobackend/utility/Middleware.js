import UserModel from "../models/UserModel.js";
import { VerifyToken } from "./TokenFunc.js";

const Middleware = async (req, res, next) => {
  try {
    const authheader = req.headers.authorization;
    if (!authheader) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing" });
    }
    const token = authheader.split(" ")[1];

    if (!token) {
      return res.status(404).json({ message: "Token is missing" });
    }

    const email = VerifyToken(token);
    if (!email) {
      return res.status(403).json({ message: "Invalid token" });
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Middleware error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default Middleware;
