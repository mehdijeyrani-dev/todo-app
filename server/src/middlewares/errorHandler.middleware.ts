import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode = 500, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

// This middleware is the final step and handles all errors.
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.error(err);

  res.status(status).json({
    success: false,
    message,
    errors: err.details || null,
  });
};
