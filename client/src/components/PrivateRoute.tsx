import { useThemeStore } from "@/store/useThemeStore";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  
  const isLoggedIn = true;
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
