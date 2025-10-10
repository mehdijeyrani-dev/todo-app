import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model";

export const AuthService = {
  async signup(data: { name: string; email: string; password: string }) {
    const existingUser = await User.findOne({ email: data.email });
    if (existingUser) throw new Error("Email already in use");

    const user = new User(data);
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    return { user, token };
  },

  async login(data: { email: string; password: string }) {
    const user = await User.findOne({ email: data.email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    return { user, token };
  },
};
