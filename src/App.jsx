import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./router/Home/Layout.tsx";

import Login_layout from "./router/login/Login_layer.tsx";
import Singup_layout from "./router/singup/Singup_layer.tsx";
import Congratulations from "./router/Congratulations/Congratulations_layer.tsx";

import Home from "./pages/Home";
import TimetablePage from "./router/TimetablePage/TimetablePage_layer.tsx";
import CommunityPage from "./router/CommunityPage/CommunityPage_layer.tsx";
import MessagePage from "./router/MessagePage/MessagePage_layer.tsx";
import AccountPage from "./router/AccountPage/AccountPage_layer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인/회원가입/축하 페이지 */}
        <Route path="/login" element={<Login_layout />} />
        <Route path="/signup" element={<Singup_layout />} />
        <Route path="/congratulations" element={<Congratulations />} />

        {/* 메인 앱 페이지는 Layout 내부에 중첩 */}
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/timetable" element={<TimetablePage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/messagepage" element={<MessagePage />} />
          <Route path="/account" element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
