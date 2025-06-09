// src/App.tsx
// import React from "react"; // eslint-disable-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 각 레이아웃/페이지 컴포넌트 임포트
import Login_layout from "./router/login/Login_layout";
import Singup_layout from "./router/singup/Singup_layout";
import Main_layout from "./router/main/Main_layout";
import Congratulations from "./router/Congratulations/Congratulations";
import Home from "./pages/Home.jsx";  // Home 컴포넌트 경로 확인 후 수정하세요
import TimetablePage from "./pages/TimetablePage.jsx"
import CommunityPage from "./pages/CommunityPage.jsx"
import MessagePage from "./pages/MessagePage.jsx"
import AccountPage from "./pages/AccountPage.jsx"
import Layout from "./components/Layout.jsx";

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

          {/* 로그인 후 메인 페이지들 - Layout을 부모 Route로 설정 */}
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/timetable" element={<TimetablePage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/messagepage" element={<MessagePage />} />
            <Route path="/account" element={<AccountPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
