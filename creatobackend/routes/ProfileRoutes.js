import { Router } from "express";

import {
  CreateProfile,
  DeleteProfile,
  getProfile,
  ProfileUpdate,
} from "../controllers/ProfileController.js";
import Middleware from "../utility/Middleware.js";
const router = Router();

router.post("/create", Middleware, CreateProfile);
router.post("/update", Middleware, ProfileUpdate);
router.post("/delete", Middleware, DeleteProfile);
router.get("/get/:id", getProfile);

export default router;
