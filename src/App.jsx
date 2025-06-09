import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Login_layout from "./router/login/Login_layout";
import Singup_layout from "./router/singup/Singup_layout";
import Congratulations from "./router/Congratulations/Congratulations";

import Home from "./pages/Home";
import TimetablePage from "./pages/TimetablePage";
import CommunityPage from "./pages/CommunityPage";
import MessagePage from "./pages/MessagePage";
import AccountPage from "./pages/AccountPage";

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
