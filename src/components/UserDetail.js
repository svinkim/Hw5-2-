import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://67281907270bd0b975545491.mockapi.io/user/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user:', error));
  }, [id]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="content">
      <h2>User Detail</h2>
      <div className="user-detail-container">
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Birthdate:</strong> {new Date(user.birthdate).toLocaleDateString()}
        </p>
        <p>
          <strong>Phone:</strong> {user.phonenumber}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;
