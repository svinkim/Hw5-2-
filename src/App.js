import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import UserList from "./components/UserList";
import UserCreate from "./components/UserCreate";
import UserDetail from "./components/UserDetail";
import UserUpdate from "./components/UserUpdate";
import "./App.css"; // Import CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>User Management</h2>
          <Link to="/list" className="menu-item">USER LIST</Link>
          <Link to="/create" className="menu-item">USER ADD</Link>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/list" />} />
            <Route path="/list" element={<UserList />} />
            <Route path="/create" element={<UserCreate />} />
            <Route path="/detail/:id" element={<UserDetail />} />
            <Route path="/update/:id" element={<UserUpdate />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
