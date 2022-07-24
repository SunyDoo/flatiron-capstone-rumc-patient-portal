import React, { useState } from "react";
import FilterDocs from "./FilterDocs";
import FilterInsurance from "./FilterInsurance";
import Calendar from "./Calendar";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

function Appointments({ doctors }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [appointmentForm, setAppointmentForm] = useState(false);
  const [selectedDocId, setSelectedDocId] = useState(null);
  const [selectedInsurance, setSelectedInsurance] = useState("All");

  const docsToDisplay = doctors.filter((doc) => {
    if (selectedDepartment === "All") return true;

    return doc.specialty === selectedDepartment;
  });

  const filteredDocs = docsToDisplay.filter((doc) => {
    if (selectedInsurance === "All") return true;

    return doc.network.includes(selectedInsurance);
  });

  function toggleForm() {
    setAppointmentForm((appointmentForm) => !appointmentForm);
  }
  function setDoc(e) {
    setAppointmentForm((appointmentForm) => !appointmentForm);
    setSelectedDocId(e.target.id);
  }

  return (
    <div
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!appointmentForm ? (
        <div>
          <div>
            <FilterDocs
              selectedDepartment={selectedDepartment}
              setSelectedDepartment={setSelectedDepartment}
            />
            <FilterInsurance
              selectedInsurance={selectedInsurance}
              setSelectedInsurance={setSelectedInsurance}
            />
          </div>

          <br></br>

          <div className="float-center">
            <MDBRow className="row-cols-3 row-cols-md-3 g-4">
              {filteredDocs.map((doc) => (
                <MDBCard
                  style={{ maxWidth: "540px", position: "relative" }}
                  key={doc.id}
                >
                  <MDBRow className="g-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#0099ff"
                        fill-opacity="1"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>

                    <MDBCol md="4">
                      <MDBCardImage src={doc.image} alt={doc.name} fluid />
                    </MDBCol>
                    <MDBCol md="8">
                      <MDBCardBody>
                        <MDBCardTitle>{doc.name}</MDBCardTitle>
                        <MDBCardText>{doc.specialty}</MDBCardText>
                        <MDBCardText>
                          <small className="text-muted">
                            {doc.location.address}
                          </small>
                          <br></br>
                          <small className="text-muted">
                            {doc.phone_number}
                          </small>
                        </MDBCardText>
                        <MDBBtn id={doc.id} onClick={setDoc}>
                          Make Appointment
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCol>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#0099ff"
                        fill-opacity="1"
                        d="M0,64L40,80C80,96,160,128,240,122.7C320,117,400,75,480,58.7C560,43,640,53,720,74.7C800,96,880,128,960,122.7C1040,117,1120,75,1200,58.7C1280,43,1360,53,1400,58.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                      ></path>
                    </svg>
                  </MDBRow>
                </MDBCard>
              ))}
            </MDBRow>
          </div>
        </div>
      ) : null}

      {appointmentForm ? (
        <>
          <br></br>
          <MDBBtn
            onClick={toggleForm}
            style={{
              display: "fixed",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            Return to Doctors
          </MDBBtn>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
            }}
          >
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0099ff"
                  fill-opacity="1"
                  d="M0,96L7.3,117.3C14.5,139,29,181,44,218.7C58.2,256,73,288,87,288C101.8,288,116,256,131,234.7C145.5,213,160,203,175,165.3C189.1,128,204,64,218,69.3C232.7,75,247,149,262,170.7C276.4,192,291,160,305,170.7C320,181,335,235,349,256C363.6,277,378,267,393,224C407.3,181,422,107,436,101.3C450.9,96,465,160,480,170.7C494.5,181,509,139,524,122.7C538.2,107,553,117,567,133.3C581.8,149,596,171,611,192C625.5,213,640,235,655,213.3C669.1,192,684,128,698,122.7C712.7,117,727,171,742,160C756.4,149,771,75,785,64C800,53,815,107,829,106.7C843.6,107,858,53,873,69.3C887.3,85,902,171,916,192C930.9,213,945,171,960,165.3C974.5,160,989,192,1004,181.3C1018.2,171,1033,117,1047,133.3C1061.8,149,1076,235,1091,224C1105.5,213,1120,107,1135,80C1149.1,53,1164,107,1178,154.7C1192.7,203,1207,245,1222,240C1236.4,235,1251,181,1265,149.3C1280,117,1295,107,1309,101.3C1323.6,96,1338,96,1353,122.7C1367.3,149,1382,203,1396,186.7C1410.9,171,1425,85,1433,42.7L1440,0L1440,320L1432.7,320C1425.5,320,1411,320,1396,320C1381.8,320,1367,320,1353,320C1338.2,320,1324,320,1309,320C1294.5,320,1280,320,1265,320C1250.9,320,1236,320,1222,320C1207.3,320,1193,320,1178,320C1163.6,320,1149,320,1135,320C1120,320,1105,320,1091,320C1076.4,320,1062,320,1047,320C1032.7,320,1018,320,1004,320C989.1,320,975,320,960,320C945.5,320,931,320,916,320C901.8,320,887,320,873,320C858.2,320,844,320,829,320C814.5,320,800,320,785,320C770.9,320,756,320,742,320C727.3,320,713,320,698,320C683.6,320,669,320,655,320C640,320,625,320,611,320C596.4,320,582,320,567,320C552.7,320,538,320,524,320C509.1,320,495,320,480,320C465.5,320,451,320,436,320C421.8,320,407,320,393,320C378.2,320,364,320,349,320C334.5,320,320,320,305,320C290.9,320,276,320,262,320C247.3,320,233,320,218,320C203.6,320,189,320,175,320C160,320,145,320,131,320C116.4,320,102,320,87,320C72.7,320,58,320,44,320C29.1,320,15,320,7,320L0,320Z"
                ></path>
              </svg>
              <Calendar docId={selectedDocId} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                  fill="#0099ff"
                  fill-opacity="1"
                  d="M0,96L7.3,117.3C14.5,139,29,181,44,218.7C58.2,256,73,288,87,288C101.8,288,116,256,131,234.7C145.5,213,160,203,175,165.3C189.1,128,204,64,218,69.3C232.7,75,247,149,262,170.7C276.4,192,291,160,305,170.7C320,181,335,235,349,256C363.6,277,378,267,393,224C407.3,181,422,107,436,101.3C450.9,96,465,160,480,170.7C494.5,181,509,139,524,122.7C538.2,107,553,117,567,133.3C581.8,149,596,171,611,192C625.5,213,640,235,655,213.3C669.1,192,684,128,698,122.7C712.7,117,727,171,742,160C756.4,149,771,75,785,64C800,53,815,107,829,106.7C843.6,107,858,53,873,69.3C887.3,85,902,171,916,192C930.9,213,945,171,960,165.3C974.5,160,989,192,1004,181.3C1018.2,171,1033,117,1047,133.3C1061.8,149,1076,235,1091,224C1105.5,213,1120,107,1135,80C1149.1,53,1164,107,1178,154.7C1192.7,203,1207,245,1222,240C1236.4,235,1251,181,1265,149.3C1280,117,1295,107,1309,101.3C1323.6,96,1338,96,1353,122.7C1367.3,149,1382,203,1396,186.7C1410.9,171,1425,85,1433,42.7L1440,0L1440,0L1432.7,0C1425.5,0,1411,0,1396,0C1381.8,0,1367,0,1353,0C1338.2,0,1324,0,1309,0C1294.5,0,1280,0,1265,0C1250.9,0,1236,0,1222,0C1207.3,0,1193,0,1178,0C1163.6,0,1149,0,1135,0C1120,0,1105,0,1091,0C1076.4,0,1062,0,1047,0C1032.7,0,1018,0,1004,0C989.1,0,975,0,960,0C945.5,0,931,0,916,0C901.8,0,887,0,873,0C858.2,0,844,0,829,0C814.5,0,800,0,785,0C770.9,0,756,0,742,0C727.3,0,713,0,698,0C683.6,0,669,0,655,0C640,0,625,0,611,0C596.4,0,582,0,567,0C552.7,0,538,0,524,0C509.1,0,495,0,480,0C465.5,0,451,0,436,0C421.8,0,407,0,393,0C378.2,0,364,0,349,0C334.5,0,320,0,305,0C290.9,0,276,0,262,0C247.3,0,233,0,218,0C203.6,0,189,0,175,0C160,0,145,0,131,0C116.4,0,102,0,87,0C72.7,0,58,0,44,0C29.1,0,15,0,7,0L0,0Z"
                ></path>
              </svg>
            </div>
            <br></br>
          </div>
        </>
      ) : null}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Appointments;
