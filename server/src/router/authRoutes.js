import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getAllUsers,
  getProfile,
  loginUser,
  registerUser,
} from "../controller/auth.controller.js";

const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware, getProfile);
router.get("/all", authMiddleware, getAllUsers);

export default router;
