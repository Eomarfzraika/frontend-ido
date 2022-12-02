import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import View from "./pages/View";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="View" element={<View/>} />
      </Routes>
    </div>
  );
}

export default App;
