// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  // const [count, setCount] = useState(0);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("/locations")
      .then((r) => r.json())
      .then((data) => setLocations(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path="/">
            <h2>Location: {locations[0].name}</h2>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
