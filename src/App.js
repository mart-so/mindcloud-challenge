import React, { useState } from "react";
import Steps from "./components/molecules/Steps";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Steps.css";

const example1 = [
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

const example2 = [
  {
    name: "Initialize Database",
    stepNumber: 1,
    hasWarning: false,
    icon: "bi-database",
    cardIcon: 0,
  },
  {
    name: "Seed Data",
    stepNumber: 2,
    hasWarning: false,
    icon: "bi-seedling",
    cardIcon: 0,
  },
  {
    name: "Run Migrations",
    stepNumber: 3,
    hasWarning: true,
    icon: "bi-box-arrow-in-up",
    cardIcon: 50,
  },
  {
    name: "Deploy Application",
    stepNumber: 4,
    hasWarning: false,
    icon: "bi-cloud-upload",
    cardIcon: 0,
  },
];

const example3 = [
  {
    name: "Collect User Feedback",
    stepNumber: 21,
    hasWarning: false,
    icon: "bi-chat-dots",
    cardIcon: 100,
  },
  {
    name: "Analyze Feedback",
    stepNumber: 22,
    hasWarning: false,
    icon: "bi-graph-up",
    cardIcon: 0,
  },
  {
    name: "Implement Improvements",
    stepNumber: 23,
    hasWarning: true,
    icon: "bi-tools",
    cardIcon: 20,
  },
];

const App = () => {
  const [stepsData, setStepsData] = useState(example1);

  return (
    <div className="app-container">
      <h1 className="text-center my-4">Steps</h1>
      <div className="text-center mb-4">
        <button className="btn btn-primary mx-2" onClick={() => setStepsData(example1)}>Example 1</button>
        <button className="btn btn-primary mx-2" onClick={() => setStepsData(example2)}>Example 2</button>
        <button className="btn btn-primary mx-2" onClick={() => setStepsData(example3)}>Example 3</button>
      </div>
      <div className="paper">
        <Steps stepsData={stepsData} />
      </div>
    </div>
  );
};

export default App;
