import React, { useState } from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

function Locations({ location }) {
  const [locationInfo, setLocationInfo] = useState(false);
  return (
    <MDBCard
      key={location.id}
      className="w-100 hover-shadow"
      style={{ maxWidth: "22rem" }}
    >
      <MDBCardHeader
        onClick={() => setLocationInfo((locationInfo) => !locationInfo)}
      >
        {location.name}
      </MDBCardHeader>
      {locationInfo ? (
        <MDBCardBody>
          <MDBTypography blockquote className="mb-0">
            <small>
              {location.address}
              <br></br>Staten Island, NY {location.zip_code}
              <br></br>
              <img
                src={location.image_url}
                className={location.name}
                alt={location.name}
                style={{ maxWidth: "20rem" }}
              />
            </small>
          </MDBTypography>
        </MDBCardBody>
      ) : null}
    </MDBCard>
  );
}

export default Locations;
