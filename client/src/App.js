import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { AppointmentContext } from "./AppointmentContext";
import Doctors from "./Components/Doctors";
import LoginForm from "./Components/LoginForm";
import FooterPage from "./Components/FooterPage";
import SignUpForm from "./Components/SignUpForm";
import NavbarPage from "./Components/NaveBarPage";
import Appointments from "./Components/Appointments";
import ViewAppointments from "./Components/ViewAppointments";
import Testimonials from "./Components/Testimonials";
import FeedbackForm from "./Components/FeedbackForm";
import HomeScreen from "./Components/HomeScreen";
import Mapbox from "./Components/Mapbox";
import ContactUs from "./Footer Links/ContactUs";
import AboutUs from "./Footer Links/AboutUs";
import BillOfRights from "./Footer Links/BillOfRights";
// import { config } from "./Constants";

function App() {
  const [locations, setLocations] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [appointments, setAppointments] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch(`/locations`)
      .then((r) => r.json())
      .then((data) => setLocations(data));

    fetch(`/doctors`)
      .then((r) => r.json())
      .then((data) => setDoctors(data));

    fetch(`/testimonials`)
      .then((r) => r.json())
      .then((data) => {
        const positiveData = data.filter((test) => test.recommend);
        setTestimonials(positiveData);
      });
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

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <AppointmentContext.Provider value={{ appointments, setAppointments }}>
        <div>
          <div className="App">
            <NavbarPage />
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/-doctors">
                <Doctors doctors={doctors} />
              </Route>
              <Route exact path="/-locations">
                <Mapbox locations={locations} />
              </Route>
              <Route exact path="/-testimonials">
                <Testimonials testimonials={testimonials} />
              </Route>
              <Route exact path="/contactus">
                <ContactUs locations={locations} />
              </Route>
              <Route exact path="/aboutus">
                <AboutUs />
              </Route>
              <Route exact path="/billofrights">
                <BillOfRights />
              </Route>
              <Route exact path="/-leavefeedback">
                <FeedbackForm
                  locations={locations}
                  testimonials={testimonials}
                  setTestimonials={setTestimonials}
                />
              </Route>
              <Route exact path="/login">
                {!currentUser ? <LoginForm /> : <HomeScreen />}
              </Route>
              <Route exact path="/signup">
                {!currentUser ? <SignUpForm /> : null}
              </Route>
              <Route exact path="/-makeappointment">
                <Appointments doctors={doctors} />
              </Route>
              <Route exact path="/-appointments">
                <ViewAppointments locations={locations} />
              </Route>
            </Switch>
            <FooterPage />
          </div>
        </div>
      </AppointmentContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
