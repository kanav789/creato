import { Router } from "express";
import Middleware from "../utility/Middleware.js";
import GenerateProfile from "../controllers/GenerateProfile.js";
const router = Router();

router.get("/generate/:id", Middleware, GenerateProfile);

export default router;
