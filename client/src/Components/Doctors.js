import React, { useState } from "react";
import FilterDocs from "./FilterDocs";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function Doctors({ doctors }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");

  const docsToDisplay = doctors.filter((doc) => {
    if (selectedDepartment === "All") return true;

    return doc.specialty === selectedDepartment;
  });

  return (
    <>
      <FilterDocs
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      <br></br>
      <div style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}>
      <MDBRow
        className="row-cols-3 row-cols-md-3 g-4"
        
      >
        {docsToDisplay.map((doc) => (
          <MDBCard
            style={{ maxWidth: "300px", position: "relative" }}
            key={doc.id}
            className="h-750"
          >
            <MDBRow className="g-0">
              <MDBCol>
                <MDBCardImage
                  src={doc.image}
                  alt={doc.name}
                  style={{ maxWidth: "15rem" }}
                  className="img-thumbnail"
                />

                <MDBCardBody>
                  <MDBCardTitle>{doc.name}</MDBCardTitle>
                  <MDBCardText>{doc.specialty}</MDBCardText>
                  <MDBCardText>
                    <small className="text-muted">{doc.location.address}</small>
                    <br></br>
                    <small className="text-muted">{doc.phone_number}</small>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        ))}
      </MDBRow>
      </div>
    </>
  );
}

export default Doctors;
