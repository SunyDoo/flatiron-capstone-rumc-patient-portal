import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { config } from "./Constants";
import { UserContext } from "./UserContext";
import NavBar from "./Components/NavBar";
import Doctors from "./Components/Doctors";
import LoginForm from "./Components/LoginForm";
import Locations from "./Components/Locations";
import WelcomeScreen from "./Components/WelcomeScreen";
import FooterPage from "./Components/FooterPage";
import SignUpForm from "./Components/SignUpForm";

function App() {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`${config.url}/locations`)
      .then((r) => r.json())
      .then((data) => setLocations(data));
  }, []);

  useEffect(() => {
    fetch(`${config.url}/doctors`)
      .then((r) => r.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    // auto-login
    fetch("/auth").then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user));
      }
    });
  }, []);

  // console.log(`Running in ${process.env.NODE_ENV}`);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <WelcomeScreen />
          </Route>
          <Route exact path="/doctors">
            <Doctors doctors={doctors} />
          </Route>
          <Route exact path="/locations">
            <Locations locations={locations} />
          </Route>
          <Route exact path="/login">
            {!currentUser ? <LoginForm /> : null}
          </Route>
          <Route exact path="/signup">
            {!currentUser ? <SignUpForm /> : null}
          </Route>
        </Switch>
        <FooterPage />
      </div>
    </UserContext.Provider>
  );
}

export default App;
