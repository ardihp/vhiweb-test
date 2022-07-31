import { isEmpty } from "lodash";
import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const location = useLocation();
  const token = localStorage.getItem("refresh_token");
  const isLogin = localStorage.getItem("isLogin");

  if (!isEmpty(token) && isLogin === "true") {
    return location.pathname !== "/" ? <Outlet /> : <Navigate to="/users" />;
  } else {
    return location.pathname === "/" ? <Outlet /> : <Navigate to="/" />;
  }
};

export default ProtectedRoute;
