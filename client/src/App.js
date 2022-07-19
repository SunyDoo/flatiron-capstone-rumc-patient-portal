import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import { config } from "./Constants";
import { UserContext } from "./UserContext";
import { AppointmentContext } from "./AppointmentContext";
import Doctors from "./Components/Doctors";
import LoginForm from "./Components/LoginForm";
import Locations from "./Components/Locations";
import WelcomeScreen from "./Components/WelcomeScreen";
import FooterPage from "./Components/FooterPage";
import SignUpForm from "./Components/SignUpForm";
import NavbarPage from "./Components/NaveBarPage";
import Appointments from "./Components/Appointments";
import ViewAppointments from "./Components/ViewAppointments";

function App() {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [appointments, setAppointments] = useState(null);

  useEffect(() => {
    fetch(`/locations`)
      .then((r) => r.json())
      .then((data) => setLocations(data));
  }, []);

  useEffect(() => {
    fetch(`/doctors`)
      .then((r) => r.json())
      .then((data) => setDoctors(data));
  }, []);

  useEffect(() => {
    // auto-login
    fetch(`/auth`).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setAppointments(user.appointments);
        });
      }
    });
  }, []);

  // console.log(`Running in ${process.env.NODE_ENV}`);
  console.log(appointments);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppointmentContext.Provider value={{ appointments, setAppointments }}>
        <div className="App">
          <NavbarPage />
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
              {!currentUser ? <LoginForm /> : <WelcomeScreen />}
            </Route>
            <Route exact path="/signup">
              {!currentUser ? <SignUpForm /> : null}
            </Route>
            <Route exact path="/makeappointment">
              <Appointments doctors={doctors} />
            </Route>
            <Route exact path="/appointment">
              <ViewAppointments />
            </Route>
          </Switch>
          <FooterPage />
        </div>
      </AppointmentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
