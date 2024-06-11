import React, { useEffect, useState } from "react";
import "./Users.css";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      <h2>Users are: {users.length}</h2>
      {users.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
};

export default Users;
