import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { NavLink } from "react-router-dom";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { config } from "../Constants";

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
    fetch(`${config.url}/login`, {
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
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,74.7C800,96,880,128,960,122.7C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
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
      <br></br>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,74.7C800,96,880,128,960,122.7C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default LoginForm;
