import React from "react";

function FilterInsurance({ selectedInsurance, setSelectedInsurance }) {
  return (
    <div>
      <h3>Filter By Network</h3>
      <select
        name="filter"
        value={selectedInsurance}
        onChange={(e) => setSelectedInsurance(e.target.value)}
      >
        <option value="All">All Networks</option>
        <option value="1199">1199</option>
        <option value="AARP">AARP</option>
        <option value="BCBS">BCBS</option>
        <option value="EMBLEM">EMBLEM</option>
        <option value="UNITEDHEALTHCARE">UNITEDHEALTHCARE</option>
        <option value="MEDICAID">MEDICAID</option>
        <option value="MEDICARE">MEDICARE</option>
        <option value="NYSNA">NYSNA</option>
        <option value="AETNA">AETNA</option>
      </select>
    </div>
  );
}

export default FilterInsurance;
