import React, { useContext } from "react";
import { AppointmentContext } from "../AppointmentContext";
// import { UserContext } from "../UserContext";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

function ViewAppointments() {
  const { appointments } = useContext(AppointmentContext);
  //   const { currentUser } = useContext(UserContext);


  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul>
          {appointments.map((appt) => (
            <MDBCard style={{ maxWidth: "540px" }} key={appt.id}>
              <MDBRow className="g-0">
                <MDBCol md="8">
                  <MDBCardBody>
                    <MDBCardTitle>{appt.doctor.name}</MDBCardTitle>
                    <MDBCardText>
                      <small className="text-muted">
                        {appt.doctor.location.name}
                      </small>
                      <br></br>
                      <small>{appt.date_time}</small>
                    </MDBCardText>
                    <MDBBtn onClick={() => console.log(appt)}>
                      Change Appointment
                    </MDBBtn>
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

export default ViewAppointments;
