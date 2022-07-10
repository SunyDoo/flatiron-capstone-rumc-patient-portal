// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { config } from "./Constants";

function App() {
  const URL = config.url;
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`${URL}/locations`)
      .then((r) => r.json())
      .then((data) => setLocations(data));
  }, []);

  console.log(`Running in ${process.env.NODE_ENV}`);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            {locations.map((location) => (
              <li key={location.id}>{location.name}</li>
            ))}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
