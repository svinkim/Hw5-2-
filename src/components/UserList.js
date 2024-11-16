import React, { useEffect, useState } from "react";

const baseURL = "https://67281907270bd0b975545491.mockapi.io/user";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div className="list-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Birthdate</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{new Date(user.birthdate).toLocaleDateString()}</td>
              <td>{user.phonenumber || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
