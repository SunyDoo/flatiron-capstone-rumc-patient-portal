import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function HomeScreen() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselInner>
        <MDBCarouselItem className="active">
          <MDBCarouselElement
            src="https://s7d2.scene7.com/is/image/TWCNews/rumc_deal_fails_cc40825169117875924778"
            alt="hospital main campus"
            className="img-fluid shadow-4"
            style={{ width: "200px", height: "700px" }}
          />
          <MDBCarouselCaption>
            <p>Welcome to Richmond University Medical Center</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://www.cannondesign.com/assets/CAN1674_N13_letter.jpg"
            alt="emergency department"
            className="img-fluid shadow-4"
            style={{ width: "200px", height: "700px" }}
          />
          <MDBCarouselCaption>
            <p>Brand new, state of the art, Emergency Department</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement
            src="https://freedesignfile.com/upload/2017/06/Group-of-happy-doctors-at-hospital-Stock-Photo-03.jpg"
            alt="team of doctors"
            className="img-fluid shadow-4"
            style={{ width: "500px", height: "700px" }}
          />
          <MDBCarouselCaption>
            <p>Experienced team of highly qualified healthcare staff</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}
