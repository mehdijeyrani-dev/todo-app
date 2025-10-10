import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth.service";
import { AppError } from "../middlewares/errorHandler.middleware";

export const AuthController = {
  async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await AuthService.signup(req.body);
      res.status(201).json(user);
    } catch (error: any) {
      next(new AppError(error.message, 400));
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await AuthService.login(req.body);
      res.json(result);
    } catch (error: any) {
      next(new AppError(error.message, 400));
    }
  },
};
