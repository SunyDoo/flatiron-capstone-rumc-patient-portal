import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function WelcomeScreen() {
  return (
    <Carousel>
      <div>
        <img
          src="https://s7d2.scene7.com/is/image/TWCNews/rumc_deal_fails_cc40825169117875924778"
          alt="hospital main campus"
        />
        <p className="legend">Welcome to Richmond University Medical Center</p>
      </div>
      <div>
        <img
          src="https://www.cannondesign.com/assets/CAN1674_N13_letter.jpg"
          alt="emergency department"
        />
        <p className="legend">
          Brand new, state of the art, Emergency Department{" "}
        </p>
      </div>
      <div>
        <img
          src="https://freedesignfile.com/upload/2017/06/Group-of-happy-doctors-at-hospital-Stock-Photo-03.jpg"
          alt="team of doctors"
        />
        <p className="legend">
          Experienced team of highly qualified healthcare staff
        </p>
      </div>
    </Carousel>
  );
}
export default WelcomeScreen;
