import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function FooterPage() {
  return (
    <div className="footer">
      <MDBFooter bgColor="primary" className="text-white text-lg-left ">
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
              <img
                src="https://www.rumcsi.org/wp-content/uploads/2020/09/rumc-logo-white.svg"
                alt="logo"
              />
              <p>
                355 Bard Ave <br />
                Staten Island, NY 10310
                <br />
                833.295.2458
              </p>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Quick Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="/aboutus" className="text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/billofrights" className="text-white">
                    Patient Bill of Rights
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a className="text-white" href="https://flatironschool.com/">
            Flatiron School
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}
