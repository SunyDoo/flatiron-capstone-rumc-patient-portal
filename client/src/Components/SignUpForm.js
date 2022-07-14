import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";

function SignUpForm() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [insurance, setInsurance] = useState("");
  const [errors, setErrors] = useState([]);
  const { setCurrentUser } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      first_name,
      last_name,
      username,
      password,
      insurance,
    };
    console.log(user);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
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
        <label>
          First Name
          <input
            type="text"
            id="firstName"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            id="lastName"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          Username
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          Insurance Provider
          <input
            type="text"
            id="insurance"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
    </>
  );
}

export default SignUpForm;
