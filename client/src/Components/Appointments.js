import React, { useState } from "react";
import FilterDocs from "./FilterDocs";
import FilterInsurance from "./FilterInsurance";
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
  const [selectedInsurance, setSelectedInsurance] = useState("All");

  const docsToDisplay = doctors.filter((doc) => {
    if (selectedDepartment === "All") return true;

    return doc.specialty === selectedDepartment;
  });

  const filteredDocs = docsToDisplay.filter((doc) => {
    if (selectedInsurance === "All") return true;

    return doc.network.includes(selectedInsurance);
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
          <div>
            <FilterInsurance
              selectedInsurance={selectedInsurance}
              setSelectedInsurance={setSelectedInsurance}
            />
            <FilterDocs
              selectedDepartment={selectedDepartment}
              setSelectedDepartment={setSelectedDepartment}
            />
          </div>
          <br></br>
          <div
            style={{
              position: "absolute",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MDBRow className="row-cols-3 row-cols-md-3 g-4">
              {filteredDocs.map((doc) => (
                <MDBCard
                  style={{ maxWidth: "540px", position: "relative" }}
                  key={doc.id}
                >
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
            </MDBRow>
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
