import React, { useState } from "react";
import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import UserUpdate from "./components/UserUpdate";
import UserDelete from "./components/UserDelete";
import "./App.css";

function App() {
  const [view, setView] = useState("list");

  const renderView = () => {
    switch (view) {
      case "list":
        return <UserList />;
      case "add":
        return <UserAdd />;
      case "update":
        return <UserUpdate />;
      case "delete":
        return <UserDelete />;
      default:
        return <UserList />;
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>User Management</h2>
        <button onClick={() => setView("list")} className="menu-item">
          USER LIST
        </button>
        <button onClick={() => setView("add")} className="menu-item">
          USER ADD
        </button>
        <button onClick={() => setView("update")} className="menu-item">
          USER UPDATE
        </button>
        <button onClick={() => setView("delete")} className="menu-item">
          USER DELETE
        </button>
      </div>
      <div className="content">
        <h2 className="content-title">
          {view === "list"
            ? "User List"
            : view === "add"
            ? "Add User"
            : view === "update"
            ? "Update User"
            : "Delete User"}
        </h2>
        {renderView()}
      </div>
    </div>
  );
}

export default App;
