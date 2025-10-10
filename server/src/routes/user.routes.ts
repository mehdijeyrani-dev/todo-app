import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { protect } from "../middlewares/auth.middleware";

const router = Router();

router.get("/", UserController.getUsers);
router.post("/", UserController.createUser);
router.get("/profile", protect, async (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

export default router;
