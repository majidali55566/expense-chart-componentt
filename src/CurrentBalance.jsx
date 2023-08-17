import React from "react";

function CurrentBalance() {
  return (
    <div className="current-balance">
      <div className="flex-group">
        <p className="balance">My balance</p>
        <p className="price">$921.48</p>
      </div>
      <svg
        width="72"
        height="48"
        viewBox="0 0 72 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" fill-rule="evenodd">
          <circle fill="#382314" cx="48" cy="24" r="24" />
          <circle stroke="#FFF" stroke-width="2" cx="24" cy="24" r="23" />
        </g>
      </svg>
    </div>
  );
}

export default CurrentBalance;
