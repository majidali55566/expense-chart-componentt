import React from "react";
import HoverExpenseValueComponent from "./HoverExpenseValueComponent";
import { useState } from "react";

function ExpenseBar({ sevenDaysSpending, maxValue }) {
  const [hoverStates, setHoverStates] = useState(Array(7).fill(false));
  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };
  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };
  const handleOnBarClick = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = !newHoverStates[index];
    setHoverStates(newHoverStates);
  };
  function ColorOfHeighestBar(barValue) {
    if (barValue === maxValue) {
      return `var(--clr-secondary-400)`;
    } else return `var(--clr-primary-400)`;
  }

  return (
    <div className="days-bars">
      {sevenDaysSpending.map((day, index) => (
        <div className="day-bar" key={index}>
          {hoverStates[index] && <HoverExpenseValueComponent day={day} />}
          <div
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            onClick={() => handleOnBarClick(index)}
            className="bar"
            id="bar-id"
            style={{
              height: `${(day.amount / maxValue) * 120}px`,
              backgroundColor: `${ColorOfHeighestBar(day.amount)}`,
            }}
          ></div>
          <p>{day.day}</p>
        </div>
      ))}
    </div>
  );
}

export default ExpenseBar;
