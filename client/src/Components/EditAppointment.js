import React, { useState, useContext } from "react";
import { AppointmentContext } from "../AppointmentContext";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { MDBBtn } from "mdb-react-ui-kit";

function EditAppointment({ appointment, setEditAppointment, handleDelete }) {
  const [startDate, setStartDate] = useState(appointment.date_time);
  const { appointments, setAppointments } = useContext(AppointmentContext);

  //   function handleFormSubmit(e) {
  //     e.preventDefault();
  //     fetch(`/appointments/${appointment.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         date_time: startDate,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((updatedAppointment) => updateAppointments(updatedAppointment));
  //   }

  function handleDeleteClick() {
    fetch(`/appointments/${appointment.id}`, {
      method: "DELETE",
    }).then(() => handleDelete(appointment));
  }

  return (
    <>
      {/* <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        showTimeSelect
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 22),
          setHours(setMinutes(new Date(), 30), 22),
          setHours(setMinutes(new Date(), 0), 23),
          setHours(setMinutes(new Date(), 30), 23),
          setHours(setMinutes(new Date(), 0), 0),
          setHours(setMinutes(new Date(), 30), 0),
          setHours(setMinutes(new Date(), 0), 1),
          setHours(setMinutes(new Date(), 30), 1),
          setHours(setMinutes(new Date(), 0), 2),
          setHours(setMinutes(new Date(), 30), 2),
          setHours(setMinutes(new Date(), 0), 3),
          setHours(setMinutes(new Date(), 30), 3),
          setHours(setMinutes(new Date(), 0), 4),
          setHours(setMinutes(new Date(), 30), 4),
          setHours(setMinutes(new Date(), 0), 5),
          setHours(setMinutes(new Date(), 30), 5),
          setHours(setMinutes(new Date(), 0), 6),
          setHours(setMinutes(new Date(), 30), 6),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
        placeholderText="Select Date and Time"
      /> */}
      {console.log(appointment.date_time)}
      <MDBBtn type="submit" onClick={() => setEditAppointment(false)}>
        Confirm Change
      </MDBBtn>
      <MDBBtn onClick={handleDeleteClick}>Cancel Appointment</MDBBtn>
    </>
  );
}

export default EditAppointment;
