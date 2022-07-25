import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
// import { config } from "../Constants";
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
  MDBBtn,
} from "mdb-react-ui-kit";

export default function NavbarPage() {
  const [showBasic, setShowBasic] = useState(true);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  function handleLogoutClick() {
    fetch(`/logout`, { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  return (
    <MDBNavbar
      expand="lg"
      sticky="true"
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
          <MDBNavbarNav sticky="true" className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: "white" }} href="/-doctors">
                Our Team
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: "white" }} href="/-locations">
                Locations
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink style={{ color: "white" }} href="/-testimonials">
                Testimonials
              </MDBNavbarLink>
            </MDBNavbarItem>

            {currentUser ? (
              <>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    style={{ color: "white" }}
                    href="/-appointments"
                  >
                    View Appointment
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    style={{ color: "white" }}
                    href="/-makeappointment"
                  >
                    Make Appointment
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink
                    style={{ color: "white" }}
                    href="/-leavefeedback"
                  >
                    Leave Feedback
                  </MDBNavbarLink>
                </MDBNavbarItem>

                <MDBBtn
                  style={{
                    color: "white",
                    position: "absolute",
                    right: "10px",
                    top: "15px",
                  }}
                  outline
                  color="white"
                  className="me-2"
                  type="button"
                  href="/"
                  onClick={handleLogoutClick}
                >
                  Logout
                </MDBBtn>
              </>
            ) : null}

            {!currentUser ? (
              <MDBNavbarItem
                style={{ textAlign: "right" }}
                className="justify-content-end"
              >
                <MDBBtn
                  outline
                  color="white"
                  className="me-2"
                  type="button"
                  href="/login"
                  exact="true"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "15px",
                  }}
                >
                  Log In / Sign Up
                </MDBBtn>
              </MDBNavbarItem>
            ) : null}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
