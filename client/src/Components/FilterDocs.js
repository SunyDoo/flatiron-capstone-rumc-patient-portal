import React from "react";

function FilterDocs({ selectedDepartment, setSelectedDepartment }) {
  return (
    <div>
        <h3>Search By Department</h3>
      <select
        name="filter"
        value={selectedDepartment}
        onChange={(e) => setSelectedDepartment(e.target.value)}
      >
        <option value="All">All Departments</option>
        <option value="Critical Care">Critical Care</option>
        <option value="OB/GYN">OB/GYN</option>
        <option value="Gastroenterology">Gastroenterology</option>
        <option value="General Surgery">General Surgery</option>
        <option value="Oncology">Oncology</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Family Practice">Family Practice</option>
        <option value="Psychiatry">Psychiatry</option>
        <option value="Urology">Urology</option>
        <option value="Pulmonary">Pulmonary</option>
        <option value="Endocrinology">Endocrinology</option>
        <option value="Medicine">Medicine</option>
      </select>
    </div>
  );
}

export default FilterDocs;