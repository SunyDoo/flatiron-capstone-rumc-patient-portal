import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";
// import { config } from "../Constants";

function NavBar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <div style={{ textAlign: "left" }}>
      <nav>
        <NavLink to="/" exact>
          Welcome
        </NavLink>
        <NavLink to="/doctors" exact>
          Our Team
        </NavLink>
        <NavLink to="/locations" exact>
          Locations
        </NavLink>
        <NavLink to="/testimonials" exact>
          Testimonials
        </NavLink>
        {currentUser ? (
          <div style={{ textAlign: "right" }}>
            <NavLink to="/appointments" exact>
              View Appointments
            </NavLink>
            <NavLink to="/makeappointment" exact>
              Make Appointment
            </NavLink>
            <NavLink to="/leavefeedback" exact>
              Leave Feedback
            </NavLink>
            <NavLink to="/billofrights" exact>
              View Patient Bill of Rights
            </NavLink>
            <NavLink to="/" exact>
              <button onClick={handleLogoutClick}>Logout</button>
            </NavLink>
          </div>
        ) : null}
        {!currentUser ? (
          <div style={{ textAlign: "right" }}>
            <NavLink to="/login" exact>
              Log In / Sign Up
            </NavLink>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default NavBar;
