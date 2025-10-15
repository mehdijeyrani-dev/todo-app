import React from "react";
import Button from "../../ui/Button";
import {
  Calendar1,
  CalendarArrowUp,
  FolderClock,
  Inbox,
  LogOut,
  Plus,
  Search,
  Settings,
  UserRoundPlus,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import AddTaskButton from "../../ui/AddTaskButton";
import Header from "./Header";
import avatarImage from "@/assets/avatar.jpg";

interface SidebarProps {
  onClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClick }) => {
  const currentUser = {
    name: "Mehdi Jeyrani",
    avatar: avatarImage,
  };

  const handleTogglePanel = () => {
    console.log("Toggle panel");
  };

  const handleOpenNotification = () => {
    console.log("Open notifications");
  };

  return (
    <aside className="w-2/10 p-2 bg-neutral-100 dark:bg-neutral-900 rounded-md flex flex-col justify-between gap-2 relative">
      <div className="flex flex-col gap-2 h-full">
        <Header
          user={currentUser}
          notificationCount={3}
          onTogglePanel={handleTogglePanel}
          onOpenNotification={handleOpenNotification}
        />
        <SimpleBar className="w-full h-96 flex-1 bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-800 border-neutral-300 p-2 rounded-md flex items-center justify-between main-scrollbar">
          <nav className="w-full flex flex-col gap-2">
            <AddTaskButton
              className="justify-start px-4 py-2 rounded-sm gap-2 focus-within:gap-6"
              onClick={onClick}
            />
            <NavLink
              to="search"
              className={({ isActive }) =>
                `w-full px-4 py-2 rounded-sm flex items-center gap-2 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-transparent hover:bg-neutral-800/50"
                }`
              }
            >
              <Search size={20} strokeWidth={2} />
              <span className="font-semibold">Search</span>
            </NavLink>
            <NavLink
              to="inbox"
              className={({ isActive }) =>
                `w-full px-4 py-2 rounded-sm flex items-center gap-2 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-transparent hover:bg-neutral-800/50"
                }`
              }
            >
              <Inbox size={20} strokeWidth={2} />
              <span className="font-semibold">Inbox</span>
            </NavLink>
            <NavLink
              to="today"
              className={({ isActive }) =>
                `w-full px-4 py-2 rounded-sm flex items-center gap-2 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-transparent hover:bg-neutral-800/50"
                }`
              }
            >
              <Calendar1 size={20} strokeWidth={2} />
              <span className="font-semibold">Today</span>
            </NavLink>
            <NavLink
              to="upcoming"
              className={({ isActive }) =>
                `w-full px-4 py-2 rounded-sm flex items-center gap-2 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-transparent hover:bg-neutral-800/50"
                }`
              }
            >
              <CalendarArrowUp size={20} strokeWidth={2} />
              <span className="font-semibold">Upcoming</span>
            </NavLink>
            <NavLink
              to="filters-labels"
              className={({ isActive }) =>
                `w-full px-4 py-2 rounded-sm flex items-center gap-2 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-transparent hover:bg-neutral-800/50"
                }`
              }
            >
              <CalendarArrowUp size={20} strokeWidth={2} />
              <span className="font-semibold">Filters & Labels</span>
            </NavLink>
            <hr className="border-neutral-300 dark:border-neutral-800" />
            <NavLink
              to="my-tasks"
              className={({ isActive }) =>
                `w-full px-4 py-2 rounded-sm flex items-center gap-2 ${
                  isActive
                    ? "bg-sky-500/10 text-sky-500"
                    : "bg-transparent hover:bg-neutral-800/50"
                }`
              }
            >
              <FolderClock size={20} strokeWidth={2} />
              <span className="font-semibold">My Tasks</span>
              <div className="ml-auto flex items-center">
                <Button variant="ghost" color="secondary" className="p-1">
                  <Plus size={16} startOffset={1.5} />
                </Button>
              </div>
            </NavLink>
          </nav>
        </SimpleBar>
      </div>
      <div className="w-full flex flex-col gap-2 bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-800 border-neutral-300 rounded-md p-2">
        <Button
          variant="ghost"
          color="secondary"
          className="px-4 py-2 gap-2 items-center justify-start rounded-md"
        >
          <UserRoundPlus size={20} strokeWidth={1} />
          <span>Add a new Team</span>
        </Button>
        <Button
          variant="ghost"
          color="secondary"
          className="px-4 py-2 gap-2 items-center justify-start rounded-md"
        >
          <Settings size={20} strokeWidth={1} />
          <span>Settings</span>
        </Button>
      </div>
      <div className="w-full p-2 bg-neutral-50 dark:bg-neutral-900 border dark:border-neutral-800 border-neutral-300 rounded-md">
        <Button
          className="gap-2 items-center justify-start px-4 w-full py-2 rounded-sm"
          variant="ghost"
          color="danger"
        >
          <LogOut size={20} strokeWidth={1} />
          Logout
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
