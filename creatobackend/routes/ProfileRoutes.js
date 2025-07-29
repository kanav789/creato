import { Router } from "express";

import {
  CreateProfile,
  ProfileUpdate,
} from "../controllers/ProfileController.js";
import Middleware from "../utility/Middleware.js";
const router = Router();

router.post("/create", Middleware, CreateProfile);
router.post("/update", Middleware, ProfileUpdate);

export default router;
