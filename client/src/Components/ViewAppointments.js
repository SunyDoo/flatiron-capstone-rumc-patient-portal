import React, { useContext } from "react";
import { AppointmentContext } from "../AppointmentContext";
import AppointmentCard from "./AppointmentCard";
// import { UserContext } from "../UserContext";

function ViewAppointments() {
  const { appointments, setAppointments } = useContext(AppointmentContext);

  //   const { currentUser } = useContext(UserContext);

  function updateAppointments(updatedAppointment) {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === updatedAppointment.id) {
        return updatedAppointment;
      } else {
        return appointment;
      }
    });
    setAppointments(updatedAppointments);
  }

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
        {appointments
          ? appointments.map((appointment) => (
              <AppointmentCard
                appointment={appointment}
                key={appointment.id}
                updateAppointments={updateAppointments}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default ViewAppointments;
