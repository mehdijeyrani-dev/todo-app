import { Task } from "../models/task.model";

export interface IDashboardStats {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  statusCounts: Record<string, number>;
  priorityCounts: Record<string, number>;
  categoryCounts: Record<string, number>;
}

export const DashboardService = {
  async getAdvancedStats(userId: string): Promise<IDashboardStats> {
    const tasks = await Task.find({ user: userId });

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    const { statusCounts, priorityCounts, categoryCounts } = tasks.reduce(
      (acc, task) => {
        acc.statusCounts[task.status] =
          (acc.statusCounts[task.status] || 0) + 1;
        acc.priorityCounts[task.priority] =
          (acc.priorityCounts[task.priority] || 0) + 1;
        if (task.category) {
          acc.categoryCounts[task.category] =
            (acc.categoryCounts[task.category] || 0) + 1;
        }
        return acc;
      },
      {
        statusCounts: {} as Record<string, number>,
        priorityCounts: {} as Record<string, number>,
        categoryCounts: {} as Record<string, number>,
      }
    );

    return {
      totalTasks,
      completedTasks,
      pendingTasks,
      statusCounts,
      priorityCounts,
      categoryCounts,
    };
  },
};
