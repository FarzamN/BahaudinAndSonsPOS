import express from "express";
import {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
} from "../controller/order.controller.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Protected routes
router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getOrders);
router.get("/:id", authMiddleware, getOrderById);
router.put("/:id", authMiddleware, updateOrder);
router.delete("/:id", authMiddleware, deleteOrder);

export default router;
