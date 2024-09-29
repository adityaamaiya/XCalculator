import React, { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  const resultStyle = {
    marginTop: "10px",
    fontSize: "20px",
    color: "white",
  };

  const buttonsStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "5px",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", maxWidth: "550px" }}>
      <h1>React Calculator</h1>
      <div className="calculator">
        <div>
          <input
            type="text"
            value={input}
            readOnly
            style={{ width: "100%", padding: "5px" }}
          />
          <div style={resultStyle}>{result}</div>
        </div>
        <div style={buttonsStyle}>
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "C",
            "0",
            "=",
            "/",
          ].map((value) => (
            <button key={value} onClick={() => handleButtonClick(value)}>
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
