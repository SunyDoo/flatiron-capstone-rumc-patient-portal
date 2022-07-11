import React from "react";

function Locations({ locations }) {
  return (
    <>
      <div>
        <ul>
          {locations.map((loc) => (
            <li key={loc.id}>{loc.name}</li>
          ))}
        </ul>
      </div>
      
    </>
  );
}

export default Locations;
