import React from "react";
import "./ProfileCard.css";

function ProfileCard({ user, setUser }) {
  if (!user) return <p>No user logged in.</p>;

  return (
    <div className="profileCard">
      <img src={user.picture} alt="profile" className="profilePic" />
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}

export default ProfileCard;
