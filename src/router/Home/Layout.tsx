import React from "react";
import { Outlet } from "react-router-dom";

import "./Layout.css";
import BottomNavBar from "../../components/BottomNavBar";

const Layout = () => (
  <div className="layout-root">
    <div className="layout-content">
      <Outlet />
    </div>
    <BottomNavBar />
  </div>
);

export default Layout;
