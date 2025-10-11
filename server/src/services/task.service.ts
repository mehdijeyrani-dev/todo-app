import { ITask, Task } from "../models/task.model";

export interface IPaginatedTasks {
  tasks: ITask[];
  totalTasks: number;
  totalPages: number;
  currentPage: number;
}

export const TaskService = {
  async createTask(userId: string, data: Partial<ITask>): Promise<ITask> {
    // ---------- Create a task ----------
    const task = new Task({ ...data, user: userId });
    return await task.save();
  },

  // ---------- Get all Tasks by user id ----------
  async getTasksByUser(
    userId: string,
    options?: {
      status?: string;
      priority?: string;
      category?: string;
      tags?: string[];
      archived?: boolean;
      page?: number;
      limit?: number;
      sortBy?: "createdAt" | "dueDate" | "priority" | "status";
      sortOrder?: "asc" | "desc";
    }
  ): Promise<IPaginatedTasks> {
    const query: any = { user: userId };

    if (options) {
      if (options.status) query.status = options.status;
      if (options.priority) query.priority = options.priority;
      if (options.category) query.category = options.category;
      if (options.tags) query.tags = { $all: options.tags };
      if (options.archived !== undefined) query.archived = options.archived;
    }

    const page = options?.page ?? 1;
    const limit = options?.limit ?? 10;
    const skip = (page - 1) * limit;

    const sortField = options?.sortBy ?? "createdAt";
    const sortOrder = options?.sortOrder === "asc" ? 1 : -1;

    const tasks = await Task.find(query)
      .sort({ [sortField]: sortOrder })
      .skip(skip)
      .limit(limit);

    const totalTasks = await Task.countDocuments(query);
    const totalPages = Math.ceil(totalTasks / limit);

    return { tasks, totalTasks, totalPages, currentPage: page };
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
