import { Link, useLocation } from "react-router-dom";
import "./BottomNavBar.css";

const menuItems = [
  { label: "홈", path: "/home", icon: "/images/home_1_fill.png" },
  { label: "수업", path: "/timetable", icon: "/images/Subtract.png" },
  { label: "커뮤니티", path: "/community", icon: "/images/3-User.png"},
  { label: "메시지", path: "/messagepage", icon: "/images/message_1_fill.png" },
  { label: "계정", path: "/account", icon: "/images/user_2_fill.png" }
];

const BottomNavBar = () => {
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      <ul className="nav-list">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          const isCenter = idx === 2;
          return (
            <li
              key={item.label}
              className={`nav-item${isActive ? " active" : ""}${isCenter ? " nav-center" : ""}`}
            >
              {isCenter ? (
                <>
                  {/* 원형 아이콘만 위에 띄움 */}
                  <Link to={item.path} className="nav-link center-link">
                    <div className="icon-wrapper center">
                      <img
                        src={item.icon}
                        alt={`${item.label} 아이콘`}
                        className="nav-icon"
                      />
                    </div>
                  </Link>
                  {/* 텍스트는 아래, 다른 메뉴와 같은 라인에 */}
                  <span className="nav-label center-label">{item.label}</span>
                </>
              ) : (
                <Link to={item.path} className="nav-link">
                  {isActive && <div className="top-indicator" />}
                  <div className="icon-wrapper">
                    <img
                      src={item.icon}
                      alt={`${item.label} 아이콘`}
                      className="nav-icon"
                    />
                  </div>
                  <span className="nav-label">{item.label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default BottomNavBar;
