import express from "express";
import {
  createInventory,
  getInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
} from "../controller/inventory.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// All routes protected with auth
router.post("/", authMiddleware, createInventory);
router.get("/", authMiddleware, getInventories);
router.get("/:id", authMiddleware, getInventoryById);
router.put("/:id", authMiddleware, updateInventory);
router.delete("/:id", authMiddleware, deleteInventory);

export default router;
