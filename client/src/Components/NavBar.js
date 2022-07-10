import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../UserContext";

function NavBar() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
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
        {!currentUser ? (
          <div>
            <NavLink to="/login" exact>
              <button>Log In</button>
            </NavLink>
          </div>
        ) : null}
        {currentUser ? (
          <div>
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
            <NavLink to="/logout" exact>
              <button>Logout</button>
            </NavLink>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default NavBar;
