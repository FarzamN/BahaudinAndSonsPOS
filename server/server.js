import cors from "cors";
import { config } from "dotenv";
import express, { json } from "express";
import connectDB from "./src/config/db.js";
import {
  authRoutes,
  orderRoutes,
  inventoryRoutes,
} from "./src/router/index.js";

config();
connectDB();

const app = express();
app.use(json());
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Routes
app.use("/auth", authRoutes);
app.use("/inventory", inventoryRoutes);
app.use("/orders", orderRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
