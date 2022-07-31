import { isEmpty } from "lodash";
import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("refresh_token");
  const isLogin = localStorage.getItem("isLogin");

  return !isEmpty(token) && isLogin === true ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
