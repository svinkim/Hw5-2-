import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UserUpdate = () => {
  const { id } = useParams(); // URL에서 사용자 ID 가져오기
  const [user, setUser] = useState({
    name: '',
    email: '',
    birthdate: '',
    phonenumber: '',
  });

  const [editCount, setEditCount] = useState(0);

  useEffect(() => {
    // 초기 데이터 로드
    axios
  .get(`https://67281907270bd0b975545491.mockapi.io/user/${id}`)
  .then((response) => setUser(response.data))
  .catch((error) => console.error('Error fetching user:', error));

  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    setEditCount((prevCount) => prevCount + 1); // 수정 횟수 증가
  };

  const handleUpdate = () => {
    axios
      .put(`https://your-mock-api-url.com/user/${id}`, user)
      .then(() => alert('User updated successfully'))
      .catch((error) => console.error('Error updating user:', error));
  };

  return (
    <div className="form-container">
      <h2>Update User</h2>
      <p>Total Edits: {editCount}</p>
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="input-field"
        value={user.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        value={user.email}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="birthdate"
        className="input-field"
        value={user.birthdate.split('T')[0]} // ISO 날짜 포맷 수정
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phonenumber"
        placeholder="Phone Number"
        className="input-field"
        value={user.phonenumber}
        onChange={handleInputChange}
      />
      <button className="submit-button" onClick={handleUpdate}>
        Update User
      </button>
    </div>
  );
};

export default UserUpdate;
