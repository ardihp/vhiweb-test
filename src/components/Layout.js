import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="container-layout">
      <div className="header">
        <div className="section-header">
          <i className="far fa-user-circle" />
          <p>User App List</p>
        </div>
      </div>
      <div className="section-content">{children}</div>
    </div>
  );
};

export default Layout;
