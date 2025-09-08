import express from "express";
import { config } from "dotenv";
import connectDB from "./src/config/db.js";
import {
  authRoutes,
  orderRoutes,
  inventoryRoutes,
} from "./src/router/index.js";

config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/orders", orderRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
