import React, { useState } from "react";

const baseURL = "https://67281907270bd0b975545491.mockapi.io/user";

function UserDelete() {
  const [userId, setUserId] = useState("");

  const handleDeleteUser = async () => {
    await fetch(`${baseURL}/${userId}`, {
      method: "DELETE",
    });
    alert("User deleted!");
  };

  return (
    <div className="user-delete-container">
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        className="input-field"
      />
      <button onClick={handleDeleteUser} className="submit-button">
        Delete User
      </button>
    </div>
  );
}

export default UserDelete;
