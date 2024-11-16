import React, { useState } from "react";

const baseURL = "https://67281907270bd0b975545491.mockapi.io/user";

function UserUpdate() {
  const [userId, setUserId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");

  const handleUpdateUser = async () => {
    const data = { name, email, birthdate, phone };
    await fetch(`${baseURL}/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("User updated!");
  };

  return (
    <div className="user-update-container">
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="User ID"
        className="input-field"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="input-field"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="input-field"
      />
      <input
        type="text"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        placeholder="Birthdate"
        className="input-field"
      />
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        className="input-field"
      />
      <button onClick={handleUpdateUser} className="submit-button">
        Update User
      </button>
    </div>
  );
}

export default UserUpdate;
