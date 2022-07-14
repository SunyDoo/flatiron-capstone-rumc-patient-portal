import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { NavLink } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { setCurrentUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    const currentUser = {
      username,
      password,
    };
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      } else {
        res.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          <button type="submit">Log In</button>{" "}
          <NavLink to="/signup" exact>
            New Patient?
          </NavLink>{" "}
        </span>
      </form>
      {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
    </>
  );
}

export default LoginForm;
