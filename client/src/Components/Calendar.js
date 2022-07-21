import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { UserContext } from "../UserContext";
import { AppointmentContext } from "../AppointmentContext";

function Calendar({ docId }) {
  const [startDate, setStartDate] = useState(null);
  const { currentUser } = useContext(UserContext);
  const { appointments, setAppointments } = useContext(AppointmentContext);
  const [errors, setErrors] = useState("");
  const minDate = new Date();

  function handleSubmit(e) {
    e.preventDefault();
    const appointmentData = {
      patient_id: currentUser.id,
      doctor_id: docId,
      date_time: startDate,
    };
    fetch(`/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newAppointment) => {
          setAppointments(...appointments, newAppointment);
          setStartDate(null);
        });
      } else {
        r.json().then(() => setErrors("Please select Date and Time"));
      }
    });
  }

  return (
    <>
      <DatePicker
        selected={startDate}
        minDate={minDate.setDate(minDate.getDate() + 1)}
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
      />
      {errors ? <p>{errors}</p> : null}
      <MDBBtn onClick={handleSubmit}>Make Appointment</MDBBtn>
    </>
  );
}

export default Calendar;
