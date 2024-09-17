import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import RemoveUser from "./RemoveUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const userSnapshot = await getDocs(usersCollection);
      const userList = userSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(userList);
    };

    fetchUsers();
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div>
      <h2>User List</h2>
      <ul class="list">
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <RemoveUser userId={user.id} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;