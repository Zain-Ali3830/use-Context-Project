import React from "react";
import { useContext } from "react";
import userContext from "../context";
import "../index.css"; // Import the CSS file

function Profile() {
  const { user } = useContext(userContext);

  if (!user) return <div className="please-login">Please Login</div>;

  return <div className="welcome-message">Welcome {user.nam}</div>;
}

export default Profile;
