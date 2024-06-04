import React from "react";
import PropTypes from "prop-types";

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

export default Step;
