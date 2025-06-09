// src/App.tsx
// import React from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 각 레이아웃/페이지 컴포넌트 임포트
import Login_layout from "./router/login/Login_layout";
import Singup_layout from "./router/singup/Singup_layout";
import Main_layout from "./router/Start_page/Main_layout";
import Congratulations from "./router/Congratulations/Congratulations";
import Home from "./router/Home/Home";
import TimetablePage from "./router/TimetablePage/TimetablePage";
import CommunityPage from "./router/CommunityPage/CommunityPage";
import MessagePage from "./router/MessagePage/MessagePage";
import AccountPage from "./router/AccountPage/AccountPage";

function App() {
  return (
    <div className="App overflow-hidden">
      <BrowserRouter>
        <Routes>
          {/* 로그인/회원가입/축하 */}
          <Route path="/" element={<Main_layout />} />
          <Route path="/login" element={<Login_layout />} />
          <Route path="/signup" element={<Singup_layout />} />
          <Route path="/congratulations" element={<Congratulations />} />

          <Route path="/home" element={<Home />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/messagepage" element={<MessagePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
