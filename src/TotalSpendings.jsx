import React from "react";

function TotalSpendings() {
  return (
    <div className="total-spendings">
      <p datatype="month">
        Total this month
        <span>$478.33</span>
      </p>
      <p datatype="last-month">
        <span>+2.45</span> from last month
      </p>
    </div>
  );
}

export default TotalSpendings;
