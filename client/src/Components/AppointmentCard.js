import React, { useState, useContext } from "react";
import { AppointmentContext } from "../AppointmentContext";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import EditAppointment from "./EditAppointment";

function AppointmentCard({ appointment }) {
  const [editAppointment, setEditAppointment] = useState(false);
  const { appointments, setAppointments } = useContext(AppointmentContext);

  function handleDelete(deletedAppointment) {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== deletedAppointment.id
    );
    setAppointments(updatedAppointments);
  }

  console.log(appointment);

  return (
    <ul>
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
                <small>{new Date(appointment.date_time).toDateString()}</small>
                <br></br>
                <small>
                  {new Date(appointment.date_time).toLocaleTimeString(
                    navigator.language,
                    { hour: "2-digit", minute: "2-digit" }
                  )}
                </small>
              </MDBCardText>
              {!editAppointment ? (
                <MDBBtn
                  onClick={() =>
                    setEditAppointment((editAppointment) => !editAppointment)
                  }
                >
                  Change Appointment
                </MDBBtn>
              ) : null}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
        {editAppointment ? (
          <EditAppointment
            appointment={appointment}
            handleDelete={handleDelete}
            setEditAppointment={setEditAppointment}
            editAppointment={editAppointment}
          />
        ) : null}
      </MDBCard>
    </ul>
  );
}

export default AppointmentCard;
