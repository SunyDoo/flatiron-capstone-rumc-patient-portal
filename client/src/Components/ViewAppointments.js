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
      <h2>Your Upcoming Appointments:</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {appointments ? (
          <ul>
            {appointments.map((appointment) => (
              <MDBCard style={{ maxWidth: "540px" }} key={appointment.id}>
                <MDBRow className="g-0">
                  <MDBCol md="8">
                    <MDBCardBody>
                      <MDBCardTitle>{appointment.doctor.name}</MDBCardTitle>
                      <MDBCardText>
                        {/* <small className="text-muted">
                        {appointment.doctor.location.name}
                      </small> */}
                        <br></br>
                        <small>
                          {new Date(appointment.date_time).toDateString()}
                        </small>
                        <br></br>
                        <small>
                          {new Date(appointment.date_time).toLocaleTimeString(
                            "en-US"
                          )}
                        </small>
                      </MDBCardText>
                      <div>
                        <MDBBtn onClick={() => console.log(appointment)}>
                          Change Appointment
                        </MDBBtn>
                        <MDBBtn onClick={() => console.log(appointment)}>
                          Cancel Appointment
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            ))}
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default ViewAppointments;
