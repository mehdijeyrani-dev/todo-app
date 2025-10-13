import PrivateRoute from "@/components/PrivateRoute";
import DashboardLayout from "@/layouts/DashboardLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
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
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
