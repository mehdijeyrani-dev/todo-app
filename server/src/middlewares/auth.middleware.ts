import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AppError } from "./errorHandler.middleware";

interface JwtPayload {
  id: string;
  iat: number;
  exp: number;
}

declare module "express-serve-static-core" {
  interface Request {
    userId?: string;
  }
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  let token: string | undefined;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) return next(new AppError("Not authorized, token missing", 401));

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    req.userId = decoded.id;
    next();
  } catch (error) {
    return next(new AppError("Not authorized, token invalid", 401));
  }
};
