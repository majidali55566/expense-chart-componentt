import React from "react";

function TotalSpendings() {
  return (
    <div className="total-spendings">
      <p datatype="month">
        Total this month
        <span>$478.33</span>
      </p>
      <span datatype="last-month">
        <p>+2.45</p> from last month
      </span>
    </div>
  );
}

export default TotalSpendings;
