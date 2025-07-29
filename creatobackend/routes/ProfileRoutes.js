import { Router } from "express";

import {
  CreateProfile,
  DeleteProfile,
  ProfileUpdate,
} from "../controllers/ProfileController.js";
import Middleware from "../utility/Middleware.js";
const router = Router();

router.post("/create", Middleware, CreateProfile);
router.post("/update", Middleware, ProfileUpdate);
router.post("/delete", Middleware, DeleteProfile);

export default router;
