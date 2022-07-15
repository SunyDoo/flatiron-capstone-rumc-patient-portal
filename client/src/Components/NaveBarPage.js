import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function NavbarPage() {
  const [showBasic, setShowBasic] = useState(true);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <MDBNavbar
      expand="lg"
      sticky
      light
      bgColor="primary"
      className="text-white"
    >
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">
          <img
            src="https://www.rumcsi.org/wp-content/uploads/2020/09/rumc-logo-white.svg"
            alt="logo"
          />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav sticky className="mr-auto mb-2 mb-lg-0">

            <MDBNavbarItem>
              <MDBNavbarLink href="/doctors">Our Team</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/locations">Locations</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/testimonials">Testimonials</MDBNavbarLink>
            </MDBNavbarItem>
            {currentUser ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/appointments">
                    View Appointment
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/makeappointment">
                    Make Appointment
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/leavefeedback">
                    Leave Feedback
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="/billofrights">
                    View Bill of Rights
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <button onClick={handleLogoutClick}>Logout</button>
              </>
            ) : null}

            {!currentUser ? (
              <MDBNavbarItem
                style={{ textAlign: "right" }}
                className="justify-content-end"
              >
                <MDBNavbarLink
                  className="d-flex input-group w-auto"
                  href="/login"
                  exact
                >
                  Log In / Sign Up
                </MDBNavbarLink>
              </MDBNavbarItem>
            ) : null}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
