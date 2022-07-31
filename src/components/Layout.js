import { isEmpty } from "lodash";
import React from "react";
import { handleLogout } from "hooks/Auth";

const Layout = ({ children }) => {
  const token = localStorage.getItem("refresh_token");
  const isLogin = localStorage.getItem("isLogin");

  return (
    <div className="container-layout">
      <div className="header">
        <div className="section-header">
          <div className="header-logo">
            <i className="far fa-user-circle" />
            <p>User App List</p>
          </div>
          {!isEmpty(token) && isLogin === "true" && (
            <i
              className="fas fa-sign-out-alt sign-out"
              onClick={handleLogout}
            />
          )}
        </div>
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Layout;
