import { Request, Response, NextFunction } from "express";
import { DashboardService } from "../services/dashboard.service";
import { AppError } from "../middlewares/errorHandler.middleware";

export const DashboardController = {
  async getAdvancedStats(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await DashboardService.getAdvancedStats(req.userId!);
      res.json(stats);
    } catch (err: any) {
      next(new AppError(err.message, 500));
    }
  },
};
