import React, { useState } from "react";
import { createUser } from "../api";

function UserCreate() {
  const [user, setUser] = useState({ name: "", email: "", birthdate: "", phonenumber: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(user).then(() => {
      alert("User created!");
      setUser({ name: "", email: "", birthdate: "", phonenumber: "" });
    });
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" name="name" value={user.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Birthdate</label>
          <input type="date" className="form-control" name="birthdate" value={user.birthdate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" className="form-control" name="phonenumber" value={user.phonenumber} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  );
}

export default UserCreate;
