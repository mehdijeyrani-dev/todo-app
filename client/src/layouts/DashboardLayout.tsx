import Button from "@/components/ui/Button";
import { useThemeStore } from "@/store/useThemeStore";
import { Sun, Moon, Search } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const DashboardLayout = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden gap-2 p-2 bg-background text-foreground">
      <header className="w-full p-4 bg-background-secondary text-foreground rounded-md shadow border border-neutral-400 dark:border-neutral-700 flex gap-10">
        <div className="size-8 grid place-content-center overflow-hidden rounded-md">
          <Button
            variant="ghost"
            color="secondary"
            onClick={toggleTheme}
            className="p-0 rounded-md"
            icon={theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            iconOnly
            size="md"
          />
        </div>
        <div className="size-8 grid place-content-center overflow-hidden rounded-md">
          <Button
            variant="ghost"
            color="secondary"
            className="p-0 rounded-md"
            icon={<Search size={20}/>}
            iconOnly
            size="md"
          />
        </div>
      </header>
      <section className="w-full flex gap-2 flex-1">
        <aside className="w-3/12 p-4 bg-neutral-200 dark:bg-neutral-900 rounded-md shadow border border-neutral-400 dark:border-neutral-700">
          Aside
        </aside>
        <main className="w-9/12 flex flex-col gap-2">
          <SimpleBar
            style={{ height: "10px" }}
            className="w-full flex-1 bg-neutral-50 dark:bg-neutral-950 border border-neutral-400 dark:border-neutral-700 rounded-md shadow p-4 main-scrollbar"
          >
            <Outlet />
          </SimpleBar>
          <footer className="w-full h-10 bg-neutral-200 dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-700 rounded-md shadow p-2">
            <h1 className="text-warning-foreground bg-warning">Footer</h1>
          </footer>
        </main>
      </section>
    </div>
  );
};

export default DashboardLayout;
