import React from "react";

function TotalSpendings() {
  return (
    <div className="total-spendings">
      <span datatype="month">
        Total this month
        <p>$478.33</p>
      </span>
      <span datatype="last-month">
        <p>+2.45</p> from last month
      </span>
    </div>
  );
}

export default TotalSpendings;
