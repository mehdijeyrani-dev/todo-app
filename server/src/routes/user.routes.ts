import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", protect, UserController.getUsers);
router.get("/profile", protect, UserController.getProfile);
router.put("/profile", protect, UserController.updateProfile);
router.delete("/profile", protect, UserController.deleteProfile);

export default router;
