import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

function Testimonials({ testimonials }) {
  return (
    <div>
      {testimonials.map((testimonial) => (
        <MDBCard key={testimonial.id}>
          <MDBCardHeader>{testimonial.location.name}</MDBCardHeader>
          <MDBCardBody>
            <MDBTypography blockquote className="mb-0">
              <p>{testimonial.feedback}</p>
              <footer className="blockquote-footer">
                <cite title="Source Title">Actual Patient</cite>
              </footer>
            </MDBTypography>
          </MDBCardBody>
        </MDBCard>
      ))}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,256L21.8,240C43.6,224,87,192,131,160C174.5,128,218,96,262,74.7C305.5,53,349,43,393,85.3C436.4,128,480,224,524,256C567.3,288,611,256,655,213.3C698.2,171,742,117,785,85.3C829.1,53,873,43,916,85.3C960,128,1004,224,1047,240C1090.9,256,1135,192,1178,181.3C1221.8,171,1265,213,1309,202.7C1352.7,192,1396,128,1418,96L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Testimonials;
