import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./componnents/Login.js";
import Dashboard from "./componnents/Dashboard.js";
import Register from "./componnents/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
