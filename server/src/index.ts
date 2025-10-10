import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import { logger } from "./middlewares/logger.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// To parse JSON
app.use(express.json());
app.use(logger);

// Connect to the database
connectDB();

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running 🚀");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// After all routes
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

console.log("JWT_SECRET:", process.env.JWT_SECRET);
