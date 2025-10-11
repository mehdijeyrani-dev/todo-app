import { ITask, Task } from "../models/task.model";

export const TaskService = {
  async createTask(userId: string, data: Partial<ITask>): Promise<ITask> {
    // ---------- Create a task ----------
    const task = new Task({ ...data, user: userId });
    return await task.save();
  },

  // ---------- Get all Tasks by user id ----------
  async getTasksByUser(
    userId: string,
    filter: {
      status?: string;
      priority?: string;
      category?: string;
      tags?: string[];
      archived?: boolean;
    }
  ): Promise<ITask[]> {
    const query: any = { user: userId };

    if (filter) {
      if (filter.status) query.status = filter.status;
      if (filter.priority) query.priority = filter.priority;
      if (filter.category) query.category = filter.category;
      if (filter.tags) query.tags = { $all: filter.tags };
      if (filter.archived !== undefined) query.archived = filter.archived;
    }

    return await Task.find(query).sort({ createdAt: -1 });
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
