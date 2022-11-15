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
            src="https://i.pinimg.com/originals/86/b8/35/86b835d38f32afa3734477e23b70c6c0.jpg"
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
            src="https://i.pinimg.com/originals/57/0b/d7/570bd7fb2413980872bc0187768d0326.jpg"
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
