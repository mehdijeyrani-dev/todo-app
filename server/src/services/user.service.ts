import { IUser, User } from "../models/user.model";

export const UserService = {
  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  },

  async createUser(data: { name: string; email: string }): Promise<IUser> {
    const user = new User(data);
    return await user.save();
  },
};
