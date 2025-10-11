import mongoose, { Document, Schema } from "mongoose";

type Priority = "low" | "medium" | "high" | "urgent";
type TaskStatus = "todo" | "in-progress" | "review" | "done" | "blocked";

export interface ITask extends Document {
  title: string;
  description?: string;
  status: TaskStatus;
  completed: boolean;
  user: mongoose.Types.ObjectId;
  priority: Priority;
  dueDate?: Date;
  startDate?: Date;
  category?: string;
  tags?: string[];
  archived?: boolean;
}

const TaskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: ["todo", "in-progress", "review", "done", "blocked"],
      default: "todo",
    },
    completed: { type: Boolean, default: false },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },
    startDate: { type: Date },
    dueDate: { type: Date },
    category: { type: String },
    tags: [{ type: String }],
    archived: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model<ITask>("Task", TaskSchema);
