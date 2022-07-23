import React, { useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";

function Doctors({ doctors }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showDepartments, setShowDepartments] = useState(true);
  const departments = [
    "Critical Care",
    "OB/GYN",
    "Gastroenterology",
    "General Surgery",
    "Oncology",
    "Cardiology",
    "Family Practice",
    "Psychiatry",
    "Urology",
    "Pulmonary",
    "Endocrinology",
    "Medicine",
  ];

  const docsToDisplay = doctors.filter((doc) => {
    if (selectedDepartment === "All") return true;

    return doc.specialty === selectedDepartment;
  });

  return (
    <div >
      {showDepartments ? (
        <>
        <h3>Departments</h3>
        <MDBRow className="department-row" >
          {departments.map((department) => (
          <div className="department-column">
            <MDBCard style={{ width: "18rem" }} className="department-card">
              <MDBListGroup flush>
                <MDBListGroupItem
                  onClick={() => {
                    setSelectedDepartment(department);
                    setShowDepartments(false);
                  }}
                >
                  {department}
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
             </div>
          ))}
        </MDBRow>
        </>
      ) : null}

      {/* <FilterDocs
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      /> */}
      <br></br>
      {!showDepartments ? (
        <div className="float-center">
          <MDBBtn onClick={() => setShowDepartments(true)}>
            Return to Departments
          </MDBBtn>
          <MDBRow className="row-cols-1 row-cols-md-3 g-4">
            {docsToDisplay.map((doc) => (
              <MDBCard
                style={{
                  maxWidth: "300px",
                  position: "relative",
                  minHeight: "100px",
                }}
                key={doc.id}
                className="h-750"
              >
                <MDBRow className="g-0">
                  <MDBCol>
                    <MDBCardImage
                      src={doc.image}
                      alt={doc.name}
                      style={{ maxWidth: "10rem" }}
                      className="img-thumbnail"
                    />

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
          </MDBRow>
          
        </div>
      ) : null}
    </div>
  );
}

export default Doctors;
