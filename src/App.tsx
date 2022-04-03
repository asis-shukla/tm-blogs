import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./features/login/Login";
import Articles from "./features/articles/Articles";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
