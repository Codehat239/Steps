import React, { useState } from "react";

const messages = ["Learn React *", "Apply for jobs", "Invest your new income."];

function App() {
  const btnStyle = { backgroundColor: "#7950f2", color: "#fff" };
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    }
  };

  const changeStep = (num) => {
    setStep(num);
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div
              className={`${step >= 1 ? "active" : ""}`}
              onClick={() => changeStep(1)}
            >
              1
            </div>
            <div
              className={`${step >= 2 ? "active" : ""}`}
              onClick={() => changeStep(2)}
            >
              2
            </div>
            <div
              className={`${step >= 3 ? "active" : ""}`}
              onClick={() => changeStep(3)}
            >
              3
            </div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button style={btnStyle} onClick={handlePrevious}>
              Previous
            </button>
            <button style={btnStyle} onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
