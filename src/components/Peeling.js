import React from "react";

const Peeling = ({ data }) => {
  return (
    <div className="dashboard-card">
      <h3>Peeling</h3>
      <div>Today's intake: {data?.peelingIntake || "XX"} kgs</div>
      <div>Today's output: {data?.peelingOutput || "XX"} kgs</div>
      <div>Turn-around ratio: {data?.peelingTurnAroundRatio || "XX"} %</div>
    </div>
  );
};

export default Peeling;
