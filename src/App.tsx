import { Route, BrowserRouter, Routes } from "react-router";

function App() {
  return (
    <>
      {/*라우터를 통해서 화면이 변하는 구역을 설정하는 곳 임*/}
      <div className="App">
        <BrowserRouter>
          <Routes>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
