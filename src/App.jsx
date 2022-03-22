import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Main from "./views/Main";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
