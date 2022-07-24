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
  MDBCardSubTitle,
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,64L14.1,58.7C28.2,53,56,43,85,48C112.9,53,141,75,169,112C197.6,149,226,203,254,197.3C282.4,192,311,128,339,106.7C367.1,85,395,107,424,101.3C451.8,96,480,64,508,42.7C536.5,21,565,11,593,42.7C621.2,75,649,149,678,192C705.9,235,734,245,762,213.3C790.6,181,819,107,847,106.7C875.3,107,904,181,932,197.3C960,213,988,171,1016,149.3C1044.7,128,1073,128,1101,149.3C1129.4,171,1158,213,1186,208C1214.1,203,1242,149,1271,138.7C1298.8,128,1327,160,1355,181.3C1383.5,203,1412,213,1426,218.7L1440,224L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
          ></path>
        </svg>{" "}
      </MDBCard>
    </ul>
  );
}

export default AppointmentCard;
