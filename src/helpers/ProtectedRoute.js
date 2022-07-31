import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("refresh_token");

  return token !== null || undefined || "" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
