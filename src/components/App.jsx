import React from "react";
import BottomNavBar from "./components/BottomNavBar";
import HomePage from "./pages/HomePage";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <HomePage />
      <BottomNavBar />
    </div>
  );
}

export default App;
