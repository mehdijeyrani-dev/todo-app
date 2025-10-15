import React from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import Button from "../ui/Button";
import { useThemeStore } from "@/store/useThemeStore";
import { Moon, Sun } from "lucide-react";
import CreateTaskForm from "../ui/CreateTaskForm";
import { Outlet } from "react-router-dom";

interface MainSectionProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const MainSection: React.FC<MainSectionProps> = ({ isOpen, onClose }) => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <main className="w-8/10 flex flex-col gap-2">
      <SimpleBar
        style={{ height: "10px" }}
        className="w-full flex-1 bg-neutral-100 dark:bg-neutral-900 rounded-md p-2 main-scrollbar relative"
      >
        <header className="w-full h-15 border border-neutral-300 dark:border-neutral-800 shadow-lg px-3 rounded-md flex items-center justify-between">
          <div className="">
            <h2 className="text-lg font-bold text-rose-500">
              TODO
              <span className="text-neutral-700 dark:text-neutral-100">
                App
              </span>
            </h2>
          </div>
          <Button
            variant="outline"
            color="secondary"
            onClick={toggleTheme}
            className="p-2 rounded-sm flex items-center gap-1"
          >
            {theme === "light" ? (
              <Moon size={20} strokeWidth={1} />
            ) : (
              <Sun size={20} strokeWidth={1} />
            )}
            <div className="w-px h-6 bg-neutral-300 dark:bg-neutral-600 mx-1" />
            <span className="text-sm font-medium">
              {theme === "light" ? "Dark" : "Light"}
            </span>
          </Button>
        </header>

        {isOpen && <CreateTaskForm onCancel={onClose} />}
        <Outlet />
      </SimpleBar>
      <footer className="w-full h-10 bg-neutral-100 dark:bg-neutral-900 rounded-md p-2">
        <h1 className="text-warning-foreground bg-warning">Footer</h1>
      </footer>
    </main>
  );
};

export default MainSection;
