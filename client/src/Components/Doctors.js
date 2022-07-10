import React from "react";

function Doctors({ doctors }) {
  return (
    <>
      <div>
        <ul>
          {doctors.map((doc) => (
            <li key={doc.id}>{doc.name}</li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

export default Doctors;
