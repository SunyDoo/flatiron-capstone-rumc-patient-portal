import React, { useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBListGroup,
  MDBListGroupItem,
  MDBBtn,
} from "mdb-react-ui-kit";

function Doctors({ doctors }) {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [showDepartments, setShowDepartments] = useState(true);
  const departments = [
    "Critical Care",
    "OB/GYN",
    "Gastroenterology",
    "General Surgery",
    "Oncology",
    "Cardiology",
    "Family Practice",
    "Psychiatry",
    "Urology",
    "Pulmonary",
    "Endocrinology",
    "Medicine",
  ];

  const docsToDisplay = doctors.filter((doc) => {
    if (selectedDepartment === "All") return true;

    return doc.specialty === selectedDepartment;
  });

  return (
    <div>
      <h3 style={{ color: "black" }}>Departments</h3>
      {showDepartments ? (
        <>
          <MDBRow className="department-row">
            {departments.map((department) => (
              <div className="department-column">
                <MDBCard
                  style={{
                    width: "18rem",
                    padding: "16px",
                    backgroundColor: "#2f5edd",
                    textAlign: "center",
                  }}
                  className="w-100 hover-shadow"
                >
                  <MDBListGroup flush>
                    <MDBListGroupItem
                      onClick={() => {
                        setSelectedDepartment(department);
                        setShowDepartments(false);
                      }}
                    >
                      {department}
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBCard>
              </div>
            ))}
          </MDBRow>
        </>
      ) : null}
      <br></br>
      {!showDepartments ? (
        <div className="float-center">
          <MDBBtn onClick={() => setShowDepartments(true)}>
            Return to Departments
          </MDBBtn>
          <MDBRow className="row-cols-1 row-cols-md-4 g-4">
            {docsToDisplay.map((doc) => (
              <MDBCard
                style={{
                  maxWidth: "300px",
                  position: "relative",
                  minHeight: "100px",
                }}
                key={doc.id}
                className="h-750"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
                <MDBRow className="g-0">
                  <MDBCol>
                    <MDBCardImage
                      src={doc.image}
                      alt={doc.name}
                      style={{ maxWidth: "10rem" }}
                      className="img-thumbnail"
                    />

                    <MDBCardBody>
                      <MDBCardTitle>{doc.name}</MDBCardTitle>
                      <MDBCardText>{doc.specialty}</MDBCardText>
                      <MDBCardText>
                        <small className="text-muted">
                          {doc.location.address}
                        </small>
                        <br></br>
                        <small className="text-muted">{doc.phone_number}</small>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1440 320"
                        >
                          <path
                            fill="#0099ff"
                            fill-opacity="1"
                            d="M0,96L34.3,117.3C68.6,139,137,181,206,197.3C274.3,213,343,203,411,192C480,181,549,171,617,149.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,165.3C1097.1,203,1166,245,1234,250.7C1302.9,256,1371,224,1406,208L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                          ></path>
                        </svg>{" "}
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            ))}
          </MDBRow>
        </div>
      ) : null}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L7.5,234.7C15,245,30,267,45,234.7C60,203,75,117,90,101.3C105,85,120,139,135,181.3C150,224,165,256,180,245.3C195,235,210,181,225,154.7C240,128,255,128,270,112C285,96,300,64,315,48C330,32,345,32,360,53.3C375,75,390,117,405,128C420,139,435,117,450,128C465,139,480,181,495,208C510,235,525,245,540,240C555,235,570,213,585,208C600,203,615,213,630,186.7C645,160,660,96,675,90.7C690,85,705,139,720,160C735,181,750,171,765,170.7C780,171,795,181,810,208C825,235,840,277,855,298.7C870,320,885,320,900,320C915,320,930,320,945,293.3C960,267,975,213,990,176C1005,139,1020,117,1035,112C1050,107,1065,117,1080,128C1095,139,1110,149,1125,128C1140,107,1155,53,1170,48C1185,43,1200,85,1215,90.7C1230,96,1245,64,1260,90.7C1275,117,1290,203,1305,202.7C1320,203,1335,117,1350,101.3C1365,85,1380,139,1395,170.7C1410,203,1425,213,1433,218.7L1440,224L1440,0L1432.5,0C1425,0,1410,0,1395,0C1380,0,1365,0,1350,0C1335,0,1320,0,1305,0C1290,0,1275,0,1260,0C1245,0,1230,0,1215,0C1200,0,1185,0,1170,0C1155,0,1140,0,1125,0C1110,0,1095,0,1080,0C1065,0,1050,0,1035,0C1020,0,1005,0,990,0C975,0,960,0,945,0C930,0,915,0,900,0C885,0,870,0,855,0C840,0,825,0,810,0C795,0,780,0,765,0C750,0,735,0,720,0C705,0,690,0,675,0C660,0,645,0,630,0C615,0,600,0,585,0C570,0,555,0,540,0C525,0,510,0,495,0C480,0,465,0,450,0C435,0,420,0,405,0C390,0,375,0,360,0C345,0,330,0,315,0C300,0,285,0,270,0C255,0,240,0,225,0C210,0,195,0,180,0C165,0,150,0,135,0C120,0,105,0,90,0C75,0,60,0,45,0C30,0,15,0,8,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default Doctors;
