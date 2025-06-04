import { Route, BrowserRouter, Routes } from "react-router";
import Singup_layout from "./router/singup/Singup_layout";
import Main_layout from "./router/main/Main_layout";
import Login_layout from "./router/login/Login_layout";
import Congratulations from "./router/Congratulations/Congratulations";

function App() {
  return (
    <>
      {/*라우터를 통해서 화면이 변하는 구역을 설정하는 곳 임*/}
      <div className="App overflow-hidden">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main_layout />} />
            <Route path="/signup" element={<Singup_layout />} />
            <Route path="/login" element={<Login_layout />} />
            <Route path="/Congratulations" element={<Congratulations />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
