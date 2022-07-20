import React, { useState, useContext } from "react";
import { AppointmentContext } from "../AppointmentContext";
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import "react-datepicker/dist/react-datepicker.css";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

function EditAppointment({
  appointment,
  setEditAppointment,
  handleDelete,
  editAppointment,
}) {
  const [startDate, setStartDate] = useState(null);
  const { appointments, setAppointments } = useContext(AppointmentContext);
  const [errors, setErrors] = useState([]);

  const minDate = new Date();

  function handleFormSubmit(e) {
    e.preventDefault();
    setEditAppointment(false);
    fetch(`/appointments/${appointment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date_time: startDate,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((updatedAppointment) =>
          updateAppointments(updatedAppointment)
        );
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function updateAppointments(updatedAppointment) {
    const updatedAppointments = appointments.map((appointments) => {
      if (appointments.id === updatedAppointment.id) {
        return updatedAppointment;
      } else {
        return appointments;
      }
    });
    setAppointments(updatedAppointments);
  }

  function handleDeleteClick() {
    fetch(`/appointments/${appointment.id}`, {
      method: "DELETE",
    }).then(() => handleDelete(appointment));
  }

  console.log(errors);

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
      <MDBBtnGroup aria-label="Basic example">
        <MDBBtn type="submit" onClick={handleFormSubmit} outline size="sm">
          Confirm Change
        </MDBBtn>
        <MDBBtn
          onClick={handleDeleteClick}
          outline
          className="mx-2"
          color="danger"
          size="sm"
        >
          Cancel Appointment
        </MDBBtn>
        {editAppointment ? (
          <MDBBtn
            type="submit"
            onClick={() => setEditAppointment(false)}
            outline
            size="sm"
          >
            Cancel Change
          </MDBBtn>
        ) : null}
      </MDBBtnGroup>
      {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
      {console.log(errors)}
    </>
  );
}

export default EditAppointment;
