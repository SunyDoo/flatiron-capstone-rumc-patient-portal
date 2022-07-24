import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
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
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L21.8,112C43.6,128,87,160,131,186.7C174.5,213,218,235,262,224C305.5,213,349,171,393,133.3C436.4,96,480,64,524,64C567.3,64,611,96,655,106.7C698.2,117,742,107,785,117.3C829.1,128,873,160,916,170.7C960,181,1004,171,1047,186.7C1090.9,203,1135,245,1178,261.3C1221.8,277,1265,267,1309,229.3C1352.7,192,1396,128,1418,96L1440,64L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
        ></path>
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
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
          <br></br>
          <MDBBtn type="submit">Sign Up</MDBBtn>
          <br></br>
          <NavLink to="/login" exact>
            Back to Log In
          </NavLink>

          {errors ? errors.map((err) => <li key={err}>{err}</li>) : null}
        </form>
      </div>
      <br></br>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L18.5,106.7C36.9,85,74,43,111,21.3C147.7,0,185,0,222,53.3C258.5,107,295,213,332,240C369.2,267,406,213,443,165.3C480,117,517,75,554,96C590.8,117,628,203,665,208C701.5,213,738,139,775,117.3C812.3,96,849,128,886,122.7C923.1,117,960,75,997,64C1033.8,53,1071,75,1108,122.7C1144.6,171,1182,245,1218,245.3C1255.4,245,1292,171,1329,154.7C1366.2,139,1403,181,1422,202.7L1440,224L1440,320L1421.5,320C1403.1,320,1366,320,1329,320C1292.3,320,1255,320,1218,320C1181.5,320,1145,320,1108,320C1070.8,320,1034,320,997,320C960,320,923,320,886,320C849.2,320,812,320,775,320C738.5,320,702,320,665,320C627.7,320,591,320,554,320C516.9,320,480,320,443,320C406.2,320,369,320,332,320C295.4,320,258,320,222,320C184.6,320,148,320,111,320C73.8,320,37,320,18,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default SignUpForm;
