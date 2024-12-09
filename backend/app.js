import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

// Load environment variables
dotenv.config({ path: "./config/config.env" });

// CORS configuration
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/message", messageRouter);

// Database connection
dbConnection();

export default app;
