import React from "react";

import LoginPage from "./LoginPage/Loginpage";
import HeaderArea from "./HeaderArea/HeaderArea";
import { Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/LoginPage" exact={true}element={<LoginPage />} />
        <Route path="/HeaderArea"  element={<HeaderArea />} />
        <Route path="/" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
