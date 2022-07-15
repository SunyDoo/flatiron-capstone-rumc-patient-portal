import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { NavLink } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
// import { config } from "../Constants";

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
    console.log(currentUser);
    fetch(`/login`, {
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <MDBInput
          className="mb-4"
          type="text"
          id="username"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="password"
          id="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <MDBBtn type="submit">Log In</MDBBtn>
        <div className="text-center">
          <NavLink to="/signup" exact>
            New Patient?
          </NavLink>
        </div>

        {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
      </form>
    </div>
  );
}

export default LoginForm;
