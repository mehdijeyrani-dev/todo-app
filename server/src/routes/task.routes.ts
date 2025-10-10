import { Router } from "express";
import { protect } from "../middlewares/auth.middleware";
import { TaskController } from "../controllers/task.controller";

const router = Router();

// All routes are protected
router.use(protect);

router.post("/", TaskController.createTask);
router.get("/", TaskController.getTasks);
router.put("/:id", TaskController.updateTask);
router.delete("/:id", TaskController.deleteTask);

export default router;
