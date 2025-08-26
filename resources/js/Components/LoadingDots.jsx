import React from "react";
 

const LoadingDots = ({ dotSize = 10, color = "#475F73" }) => {
  return (
    <div className="loading-dots">
      <span
        className="dot"
        style={{ width: dotSize, height: dotSize, backgroundColor: color }}
      ></span>
      <span
        className="dot"
        style={{ width: dotSize, height: dotSize, backgroundColor: color }}
      ></span>
      <span
        className="dot"
        style={{ width: dotSize, height: dotSize, backgroundColor: color }}
      ></span>
    </div>
  );
};

export default LoadingDots;