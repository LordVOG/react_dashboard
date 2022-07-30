import { useState } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
