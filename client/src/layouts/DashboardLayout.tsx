import { SideBar } from "@/components";
import MainSection from "@/components/layout/MainSection";
import { useState } from "react";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex w-full min-h-screen overflow-hidden gap-2 p-2 bg-neutral-300 text-foreground dark:bg-neutral-950">
      <SideBar onClick={handleOpenModal} />
      <MainSection isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default DashboardLayout;
