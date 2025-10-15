import React, { useState } from "react";
import Button from "./Button";
import {
  Calendar,
  ChevronDown,
  Clock,
  Flag,
  Inbox,
  Tag,
  Target,
  UserRoundPlus,
} from "lucide-react";
import AutoResizeTextarea from "./AutoResizeTextarea";

interface CreateTaskFormProps {
  onCancel?: () => void;
  onAdd?: (data: { title: string; description: string }) => void;
  className?: string;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({
  onCancel,
  onAdd,
  className,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onAdd?.({ title, description });
  };

  return (
    <div
      className={`absolute w-10/12 left-1/2 -translate-x-1/2 top-52 z-50 h-fit bg-neutral-900 shadow-2xl rounded-2xl border border-neutral-800 p-5 flex flex-col gap-1 ${className}`}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task name"
        className="focus-within:outline-0 text-xl font-semibold w-full placeholder:text-neutral-500 text-neutral-200"
      />
      <AutoResizeTextarea
        value={description}
        onChange={setDescription}
        minRows={1}
        maxRows={6}
        showShiftEnterHint={true}
      />
      <div className="w-full flex items-center gap-2">
        <Button
          variant="outline"
          color="secondary"
          className="px-2 py-1 rounded-sm gap-1"
        >
          <Calendar size={16} />
          <span>Date</span>
        </Button>
        <Button
          variant="outline"
          color="secondary"
          className="px-2 py-1 rounded-sm gap-1"
        >
          <Clock size={16} />
          <span>Reminders</span>
        </Button>
        <Button
          variant="outline"
          color="secondary"
          className="px-2 py-1 rounded-sm gap-1"
        >
          <Flag size={16} />
          <span>Priority</span>
        </Button>
        <Button
          variant="outline"
          color="secondary"
          className="px-2 py-1 rounded-sm gap-1"
        >
          <Tag size={16} />
          <span>Labels</span>
        </Button>
        <Button
          variant="outline"
          color="secondary"
          className="px-2 py-1 rounded-sm gap-1"
        >
          <Target size={16} />
          <span>Deadline</span>
        </Button>
      </div>
      <hr className="border-neutral-800 my-2" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            color="secondary"
            className="px-2 py-1 rounded-sm gap-2"
          >
            <Inbox size={16} />
            <span>Inbox</span>
            <ChevronDown size={14} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            color="secondary"
            className="px-2 py-1 rounded-sm gap-2"
          >
            <UserRoundPlus size={16} />
            <span>Team</span>
            <ChevronDown size={14} className="ml-2" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            color="secondary"
            className="px-2 py-1 rounded-sm"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className="px-2 py-1 rounded-sm"
            disabled={!title.trim()}
            onClick={handleSubmit}
          >
            Add Task
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskForm;
