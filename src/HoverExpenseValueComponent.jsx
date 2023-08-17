import React from "react";

function HoverExpenseValueComponent({ day }) {
  return (
    <div className="bar-value">
      <p>{day.amount}</p>
    </div>
  );
}

export default HoverExpenseValueComponent;
