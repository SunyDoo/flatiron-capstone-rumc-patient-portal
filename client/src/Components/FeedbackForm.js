import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { MDBCheckbox } from "mdb-react-ui-kit";

function FeedbackForm({ testimonials, setTestimonials, locations }) {
  const [feedback, setFeedback] = useState("");
  const [errors, setErrors] = useState([]);
  const [recommend, setRecommend] = useState(false);
  const { currentUser } = useContext(UserContext);
  const [location, setLocation] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    const feedbackData = {
      patient_id: currentUser.id,
      location_id: location,
      recommend: recommend,
      feedback: feedback,
    };
    fetch("/testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newFeedback) => updateTestimonials(newFeedback));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
      setFeedback("")
      setRecommend(false)
      setLocation(true)
    });
  }
  function updateTestimonials(newFeedback) {
    setTestimonials((testimonials) => [...testimonials, newFeedback]);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <select
            name="filter"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="true" disabled="disabled">
              Please Select Location
            </option>
            <option value="1">Main Hospital Campus</option>
            <option value="2">Breast and Women's Center</option>
            <option value="3">Cardiopulmonary Rehab</option>
            <option value="4">Center for Cancer Care</option>
            <option value="5">Endocrinology Center: Staten Island</option>
            <option value="6">Family Health Center</option>
            <option value="7">OB/GYN Services: Staten Island</option>
            <option value="8">
              Primary Care and Gastroenterology: Staten Island
            </option>
            <option value="9">Primary Walk-In/Cardiology: Staten Island</option>
            <option value="10">Primary Walk-In/Immediate Care Center</option>
            <option value="11">Urology Services: Staten Island</option>
            <option value="12">
              The Center For Integrative Behavioral Medicine
            </option>
          </select>
          <MDBCheckbox
            name="recommend"
            value={recommend}
            id="flexCheckDefault"
            label="Recommend?"
            onChange={() => setRecommend((recommend) => !recommend)}
          />
          <label>
            Feedback:
            <input
              type="text"
              name="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
          </label>
          {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
          <button type="submit">Leave Feedback</button>
        </form>
      </div>
    </>
  );
}

export default FeedbackForm;
