import React from 'react';
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function Departments({ department }) {
    
  return (
    <MDBCard style={{ width: '18rem' }}>
      <MDBListGroup flush>
        <MDBListGroupItem>{department}</MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
  );
}