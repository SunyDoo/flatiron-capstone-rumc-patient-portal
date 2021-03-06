import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { MDBInput } from "mdb-react-ui-kit";
// import { config } from "../Constants";

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
    // console.log(user);
    fetch(`/signup`, {
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
          id="firstName"
          label="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <MDBInput
          className="mb-4"
          type="text"
          id="lastName"
          label="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <label>
          Insurance Provider
          <select
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
          >
            <option value="">Please Select...</option>
            <option value="1199">1199</option>
            <option value="AARP">AARP</option>
            <option value="BCBS">BCBS</option>
            <option value="EMBLEM">EMBLEM</option>
            <option value="UNITEDHEALTHCARE">UNITEDHEALTHCARE</option>
            <option value="MEDICAID">MEDICAID</option>
            <option value="MEDICARE">MEDICARE</option>
            <option value="NYSNA">NYSNA</option>
            <option value="AETNA">AETNA</option>
          </select>
        </label>
        <button type="submit">Sign Up</button>
        {errors ? errors.map((err) => <li key={err}>{err}</li>) : null}
      </form>
    </div>
  );
}

export default SignUpForm;
