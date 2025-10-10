import { ITask, Task } from "../models/task.model";

export const TaskService = {
  async createTask(
    userId: string,
    data: { title: string; description?: string }
  ): Promise<ITask> {
    // ---------- Create a task ----------
    const task = new Task({ ...data, user: userId });
    return await task.save();
  },

  // ---------- Get all Tasks by user id ----------
  async getTasksByUser(userId: string): Promise<ITask[]> {
    return await Task.find({ user: userId });
  },

  // ---------- Update a task ----------
  async updateTask(
    taskId: string,
    userId: string,
    data: Partial<ITask>
  ): Promise<ITask | null> {
    return await Task.findByIdAndUpdate({ _id: taskId, user: userId }, data, {
      new: true,
    });
  },

  // ---------- Delete a task ----------
  async deleteTask(taskId: string, userId: string): Promise<void> {
    await Task.findByIdAndDelete({ _id: taskId, user: userId });
  },
};
