import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { config } from "./Constants";
import { UserContext } from "./UserContext";
import NavBar from "./Components/NavBar";
import Doctors from "./Components/Doctors";

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

  // console.log(`Running in ${process.env.NODE_ENV}`);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h3>Welcome</h3>
          </Route>
          <Route exact path="/doctors">
            <Doctors doctors={doctors} />
          </Route>
          <Route exact path="/locations">
            {locations.map((location) => (
              <li key={location.id}>{location.name}</li>
            ))}
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
