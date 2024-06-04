import React, { useState } from "react";
import PropTypes from "prop-types";
import Step from "../atoms/Step";

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

export default Steps;
