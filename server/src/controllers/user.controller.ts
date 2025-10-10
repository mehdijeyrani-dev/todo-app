import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { AppError } from "../middlewares/errorHandler.middleware";

export const UserController = {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },

  async getProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.getUserById(req.userId!);
      if (!user) return next(new AppError("User not found", 404));
      res.json(user);
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },

  async updateProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.updateUser(req.userId!, req.body);
      res.json(user);
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },

  async deleteProfile(req: Request, res: Response, next: NextFunction) {
    try {
      await UserService.deleteUser(req.userId!);
      res.json({ message: "User deleted successfully" });
    } catch (error: any) {
      next(new AppError(error.message, 500));
    }
  },
};
