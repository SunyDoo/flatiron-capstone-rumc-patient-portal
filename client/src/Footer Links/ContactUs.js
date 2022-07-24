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
    </div>
  );
}
