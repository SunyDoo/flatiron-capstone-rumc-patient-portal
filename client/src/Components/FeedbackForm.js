import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import { config } from "../Constants";

function FeedbackForm({ testimonials, setTestimonials }) {
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
    fetch(`${config.url}/testimonials`, {
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
      setFeedback("");
      setRecommend(false);
      setLocation(true);
    });
  }
  function updateTestimonials(newFeedback) {
    setTestimonials((testimonials) => [...testimonials, newFeedback]);
  }

  return (
    <div>
      <div className="float-container">
        <div
          className="float-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
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
              <option value="9">
                Primary Walk-In/Cardiology: Staten Island
              </option>
              <option value="10">Primary Walk-In/Immediate Care Center</option>
              <option value="11">Urology Services: Staten Island</option>
              <option value="12">
                The Center For Integrative Behavioral Medicine
              </option>
            </select>
            <br></br>
            <MDBCheckbox
              name="recommend"
              value={recommend}
              id="flexCheckDefault"
              label="Recommend This Location?"
              onChange={() => setRecommend((recommend) => !recommend)}
            />
            <label>
              <textarea
                type="text"
                rows="5"
                cols="50"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
              />
            </label>
            <br></br>
            <MDBBtn type="submit">Leave Feedback</MDBBtn>
            {errors ? errors.map((err) => <p key={err}>{err}</p>) : null}
          </form>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L21.8,240C43.6,224,87,192,131,160C174.5,128,218,96,262,74.7C305.5,53,349,43,393,85.3C436.4,128,480,224,524,256C567.3,288,611,256,655,213.3C698.2,171,742,117,785,85.3C829.1,53,873,43,916,85.3C960,128,1004,224,1047,240C1090.9,256,1135,192,1178,181.3C1221.8,171,1265,213,1309,202.7C1352.7,192,1396,128,1418,96L1440,64L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default FeedbackForm;
