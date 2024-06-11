import React from "react";

const User = ({ user }) => {
  const { name, email, website, username } = user;
  return (
    <div className="user-box">
      <h1>Sing user</h1>
      <h1>User Name Is: {name}</h1>
      <h5>{website}</h5>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default User;
