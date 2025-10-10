import { NextFunction, Request, Response } from "express";
import { TaskService } from "../services/task.service";
import { AppError } from "../middlewares/errorHandler.middleware";

export const TaskController = {
  async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await TaskService.createTask(req.userId!, req.body);
      res.status(201).json(task);
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },

  async getTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const tasks = await TaskService.getTasksByUser(req.userId!);
      res.json(tasks);
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },

  async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const task = await TaskService.updateTask(
        req.params.id,
        req.userId!,
        req.body
      );
      if (!task) return next(new AppError("Task not found", 404));
      res.json(task);
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      await TaskService.deleteTask(req.params.id, req.userId!);
      res.json({ message: "Task deleted successfully" });
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },
};
