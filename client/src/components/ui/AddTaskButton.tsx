import React from "react";
import Button from "./Button";
import { SquarePlus } from "lucide-react";

interface AddTaskButtonProps {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({
  onClick,
  className = "",
  disabled = false,
}) => {
  return (
    <Button className={className} disabled={disabled} onClick={onClick}>
      <SquarePlus size={20} strokeWidth={2} />
      <span className="font-semibold">Add Task</span>
    </Button>
  );
};

export default AddTaskButton;
