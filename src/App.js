import React from "react";
import LogOutScreen from "./components/LogOutScreen";
import LoginScreen from "./components/LoginScreen";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/logout" element={<LogOutScreen />} />
    </Routes>
  );
};

export default App;
