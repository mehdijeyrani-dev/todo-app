import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { AppError } from "../middlewares/errorHandler.middleware";

export const UserController = {
  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      next(new AppError("Failed to get users", 500, error));
    }
  },

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await UserService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(new AppError("Failed to create user", 500, error));
    }
  },
};
