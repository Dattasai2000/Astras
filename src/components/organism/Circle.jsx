
import React, { useState } from "react";

function Circle() {
  const [count, setCount] = useState(1);

  const handleChange = (e ) => {
    const value = parseInt(e.target.value);
    if (value >= 1 && value <= 5) {
      setCount(value);
    }
  };

  const renderCircles = (level, maxLevel) => {
    if (level === 0) return null;

    const size = 300 - (maxLevel - level) * 60; 
    const borderColor = "yellow"; 

    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "50%",
          border: `4px solid ${borderColor}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          margin: "10px", 
        }}
      >
        {renderCircles(level - 1, maxLevel)}
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Enter a number (1 to 5)</h2>
      <input
        type="number"
        min="1"
        max="5"
        value={count}
        onChange={handleChange}
        style={{
          fontSize: "18px",
          padding: "8px",
          width: "60px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      />
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {renderCircles(count, count)}
      </div>
    </div>
  );
}

export default Circle;