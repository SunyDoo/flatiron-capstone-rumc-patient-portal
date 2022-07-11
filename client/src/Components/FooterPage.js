import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
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
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.flatironschool.com"> Flatiron School </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
