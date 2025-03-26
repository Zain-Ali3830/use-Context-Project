import React, { useState, useContext } from "react";
import userContext from "../context";
import "../index.css"; // Import the CSS file

function Login() {
  const [nam, setName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  function handleSubmit(e) {
    e.preventDefault();
    setUser({ nam, password });
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="userName"
            className="input-field"
            placeholder="Enter Name"
            value={nam}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
