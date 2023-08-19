import React from "react";

function TotalSpendings() {
  return (
    <div className="total-spendings">
      <div className="this">
        <p>Total this month</p>
        <p datatype="month">$478.33</p>
      </div>
      <div className="last">
        <p datatype="last-month">+2.45</p> 
    <p>from last month</p>
      </div>
    </div>
  );
}

export default TotalSpendings;
