import React from "react";
import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function ContactUs({ locations }) {
  return (
    <div>
      <h1>Contact Us</h1>
      <h3>Hospital Information</h3>
      <h4>Richmond University Medical Center - Main Campus</h4>
      <p>355 Bard Avenue, Staten Island, NY 10310</p>
      <h4>Physician Referral Service</h4>
      <p>(800)-422-8798</p>
      <h4>Medical Records</h4>
      <p>(718) 818-2041 email: medrecords@rumcsi.org</p>
      <br></br>
      <p>
        If you are experiencing an emergency, please call 911 for assistance.
      </p>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th scope="col">Department</th>
            <th scope="col">Phone Number</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {locations.map((location) => (
            <tr>
              <th scope="row" key={location.id}>
                {location.name}
              </th>
              <td>{location.phone_number}</td>
            </tr>
          ))}
        </MDBTableBody>
      </MDBTable>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,96L10.4,101.3C20.9,107,42,117,63,149.3C83.5,181,104,235,125,229.3C146.1,224,167,160,188,117.3C208.7,75,230,53,250,80C271.3,107,292,181,313,197.3C333.9,213,355,171,376,138.7C396.5,107,417,85,438,74.7C459.1,64,480,64,501,80C521.7,96,543,128,563,138.7C584.3,149,605,139,626,112C647,85,668,43,689,58.7C709.6,75,730,149,751,149.3C772.2,149,793,75,814,74.7C834.8,75,856,149,877,160C897.4,171,918,117,939,90.7C960,64,981,64,1002,101.3C1022.6,139,1043,213,1064,256C1085.2,299,1106,309,1127,288C1147.8,267,1169,213,1190,208C1210.4,203,1231,245,1252,261.3C1273,277,1294,267,1315,229.3C1335.7,192,1357,128,1377,112C1398.3,96,1419,128,1430,144L1440,160L1440,0L1429.6,0C1419.1,0,1398,0,1377,0C1356.5,0,1336,0,1315,0C1293.9,0,1273,0,1252,0C1231.3,0,1210,0,1190,0C1168.7,0,1148,0,1127,0C1106.1,0,1085,0,1064,0C1043.5,0,1023,0,1002,0C980.9,0,960,0,939,0C918.3,0,897,0,877,0C855.7,0,835,0,814,0C793,0,772,0,751,0C730.4,0,710,0,689,0C667.8,0,647,0,626,0C605.2,0,584,0,563,0C542.6,0,522,0,501,0C480,0,459,0,438,0C417.4,0,397,0,376,0C354.8,0,334,0,313,0C292.2,0,271,0,250,0C229.6,0,209,0,188,0C167,0,146,0,125,0C104.3,0,83,0,63,0C41.7,0,21,0,10,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}
