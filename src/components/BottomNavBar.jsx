import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./BottomNavBar.css";

const menuItems = [
  { label: "홈", path: "/home" },
  { label: "수업", path: "/timetable" },
  { label: "커뮤니티", path: "/community" },
  { label: "메시지", path: "/messagepage" },
  { label: "계정", path: "/account" }
];

const BottomNavBar = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <ul className="nav-list">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={item.label} className={`nav-item${isActive ? " active" : ""}`}>
              <Link to={item.path} className="nav-link">
                {isActive && <div className="top-indicator" />}
                <span className="nav-label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavBar;
