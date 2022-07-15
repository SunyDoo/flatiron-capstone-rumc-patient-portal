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
  })
  
  return (
    <>
      <FilterDocs
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul>
          {docsToDisplay.map((doc) => (
            <MDBCard style={{ maxWidth: "540px" }} key={doc.id}>
              <MDBRow className="g-0">
                <MDBCol md="4">
                  <MDBCardImage src={doc.image} alt={doc.name} fluid />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardTitle>{doc.name}</MDBCardTitle>
                    <MDBCardText>{doc.specialty}</MDBCardText>
                    <MDBCardText>
                      <small className="text-muted">
                        {doc.location.address}
                      </small>
                      <br></br>
                      <small className="text-muted">{doc.phone_number}</small>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Doctors;
