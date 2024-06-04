import React, { useState } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Steps.css";

const Step = ({ step, isActive, onClick }) => {
  return (
    <div className="step-wrapper position-relative">
      <div
        className={`step-container ${
          isActive ? "active" : ""
        } d-flex align-items-center p-3 m-3 mb-3`}
        onClick={onClick}
      >
        <i className={`bi ${step.icon}`}></i>
        <span className="step-number ms-3 d-flex align-items-center justify-content-center">
          {step.stepNumber}
        </span>

        <span className="step-name ms-3 flex-grow-1 ">{step.name}</span>

        {step.cardIcon > 0 && (
          <div className="list-number">
            <i className="bi bi-list-ul"> {step.cardIcon}</i>
          </div>
        )}
      </div>

      {step.hasWarning && (
        <i className="bi bi-exclamation-circle-fill custom-warning position-absolute  translate-middle-y"></i>
      )}
    </div>
  );
};

Step.propTypes = {
  step: PropTypes.shape({
    name: PropTypes.string.isRequired,
    stepNumber: PropTypes.number.isRequired,
    hasWarning: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired,
    cardIcon: PropTypes.bool.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Steps = ({ stepsData }) => {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div className="container position-relative">
      {stepsData.map((step, index) => (
        <React.Fragment key={index}>
          <Step
            step={step}
            isActive={activeStep === index}
            onClick={() => setActiveStep(index)}
          />
          {index < stepsData.length - 1 && <div className="lineV"></div>}

          {index < stepsData.length - 1 && <div className="lineH"></div>}
        </React.Fragment>
      ))}
    </div>
  );
};

Steps.propTypes = {
  stepsData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      stepNumber: PropTypes.number.isRequired,
      hasWarning: PropTypes.bool.isRequired,
      icon: PropTypes.string.isRequired,
      cardIcon: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const stepsData = [
  {
    name: "Merge Employees with Demographics",
    stepNumber: 11,
    hasWarning: false,
    icon: "bi-arrows-angle-contract",
    cardIcon: 100,
  },
  {
    name: "Update User",
    stepNumber: 12,
    hasWarning: true,
    icon: "bi-person-circle",
    cardIcon: 0,
  },
];

const App = () => {
  return (
    <div className="app-container">
      <h1 className="text-center my-4">Steps</h1>
      <div className="paper">
        <Steps stepsData={stepsData} />
      </div>
    </div>
  );
};

export default App;
