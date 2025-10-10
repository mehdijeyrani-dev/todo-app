import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
  async getUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.json(users);
  },

  async createUser(req: Request, res: Response) {
    const user = await UserService.createUser(req.body);
    res.status(201).json(user);
  },
};
