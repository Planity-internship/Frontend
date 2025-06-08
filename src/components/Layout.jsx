import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavBar from "./BottomNavBar";
import "./Layout.css";

const Layout = () => (
  <div className="layout-root">
    <div className="layout-content">
      <Outlet />
    </div>
    <BottomNavBar />
  </div>
);

export default Layout;
