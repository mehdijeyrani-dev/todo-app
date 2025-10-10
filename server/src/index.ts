import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import userRoutes from "./routes/user.routes";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// To parse JSON
app.use(express.json());

// Connect to the database
connectDB();

// Test route
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running 🚀");
});

app.use("/api/users", userRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
