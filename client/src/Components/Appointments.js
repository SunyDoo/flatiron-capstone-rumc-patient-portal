import React, { useState } from "react";
import FilterDocs from "./FilterDocs";
import Calendar from "./Calendar";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

function Appointments({ doctors }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [appointmentForm, setAppointmentForm] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState(null);

  const docsToDisplay = doctors.filter((doc) => {
    if (selectedDepartment === "All") return true;

    return doc.specialty === selectedDepartment;
  });
  function toggleForm() {
    setAppointmentForm((appointmentForm) => !appointmentForm);
  }
  function setDoc(e) {
    setAppointmentForm((appointmentForm) => !appointmentForm);
    setSelectedDocId(e.target.id);
  }

  //   console.log(selectDoc);

  return (
    <>
      {!appointmentForm ? (
        <div className="doctors">
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
                          <small className="text-muted">
                            {doc.phone_number}
                          </small>
                        </MDBCardText>
                        <MDBBtn id={doc.id} onClick={setDoc}>
                          Make Appointment
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                  </MDBRow>
                </MDBCard>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {appointmentForm ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <div>
            <Calendar docId={selectedDocId} />
          </div>
          <br></br>
          <MDBBtn onClick={toggleForm}>Return to Doctors</MDBBtn>
        </div>
      ) : null}
    </>
  );
}

export default Appointments;
