import { IUser, User } from "../models/user.model";

export const UserService = {
  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  },

  async getUserById(id: string): Promise<IUser | null> {
    return await User.findById(id);
  },

  async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(id, data, { new: true });
  },

  async deleteUser(id: string): Promise<void> {
    await User.findByIdAndDelete(id);
  },
};
