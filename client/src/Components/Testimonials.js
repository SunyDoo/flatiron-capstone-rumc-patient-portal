import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

function Testimonials({ testimonials }) {

    
  return (
    <>
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
    </>
  );
}

export default Testimonials;
