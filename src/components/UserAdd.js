import React, { useState } from "react";

const baseURL = "https://67281907270bd0b975545491.mockapi.io/user";

function UserAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddUser = async () => {
    const data = { name, email, birthdate, phone };
    await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("User added!");
  };

  return (
    <div className="user-add-container">
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
      <button onClick={handleAddUser} className="submit-button">
        Add User
      </button>
    </div>
  );
}

export default UserAdd;
