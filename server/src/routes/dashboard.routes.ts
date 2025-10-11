import { Router } from "express";
import { DashboardController } from "../controllers/dashboard.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.get("/advanced", protect, DashboardController.getAdvancedStats);

export default router;
