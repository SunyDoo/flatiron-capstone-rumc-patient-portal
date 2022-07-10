import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { config } from "./Constants";
import { UserContext } from "./UserContext";

function App() {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const msg = useContext(UserContext);
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

  console.log(`Running in ${process.env.NODE_ENV}`);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="App">
          <Switch>
            <Route path="/doctors">
              {doctors.map((doctor) => (
                <li key={doctor.id}>{doctor.name}</li>
              ))}
            </Route>
            <Route path="/">
              {locations.map((location) => (
                <li key={location.id}>{location.name}</li>
              ))}
              <p>{msg}</p>
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
