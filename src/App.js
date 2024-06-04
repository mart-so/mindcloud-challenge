import React  from "react";
import Steps from "./components/molecules/Setps"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Steps.css";

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
