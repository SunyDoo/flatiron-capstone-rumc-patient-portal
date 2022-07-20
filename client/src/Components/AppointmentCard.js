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
  MDBCardSubTitle
} from "mdb-react-ui-kit";
import EditAppointment from "./EditAppointment";

function AppointmentCard({ appointment, locations }) {
  const [editAppointment, setEditAppointment] = useState(false);
  const { appointments, setAppointments } = useContext(AppointmentContext);

  function handleDelete(deletedAppointment) {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== deletedAppointment.id
    );
    setAppointments(updatedAppointments);
  }



  return (
    <ul>
      <MDBCard style={{ maxWidth: "22rem" }} key={appointment.id}>
        <MDBRow className="g-0">
          <MDBCol md="8">
            <MDBCardBody>
              <MDBCardTitle>{appointment.doctor.name}</MDBCardTitle>
              <MDBCardSubTitle>{appointment.location.name} </MDBCardSubTitle>
              <MDBCardText>
                <small>{appointment.location.address} </small>
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
