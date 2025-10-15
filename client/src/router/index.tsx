import PrivateRoute from "@/components/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import About from "@/pages/About";
import AddTask from "@/pages/AddTask";
import FiltersLabels from "@/pages/FiltersLabels";
import Home from "@/pages/Home";
import Inbox from "@/pages/Inbox";
import MyTasks from "@/pages/MyTasks";
import Projects from "@/pages/Projects";
import Search from "@/pages/Search";
import Today from "@/pages/Today";
import Upcoming from "@/pages/Upcoming";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/add-task", element: <AddTask /> },
      { path: "/search", element: <Search /> },
      { path: "/inbox", element: <Inbox /> },
      { path: "/today", element: <Today /> },
      { path: "/upcoming", element: <Upcoming /> },
      { path: "/filters-labels", element: <FiltersLabels /> },
      { path: "/my-tasks", element: <MyTasks /> },
    ],
  },
]);

export default router;
