import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="fixed-bottom">
      <MDBFooter bgColor="primary" className="text-white text-lg-left">
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

//  style={{
//   position: "flex",
//   left: "0",
//   bottom: "0",
//   height: "175px",
//   width: "100%",
// }}
