import React from "react";

const Shelling = ({ data }) => {
  return (
    <div className="dashboard-card">
      <h3>Shelling</h3>
      <div>Today's intake: {data?.shellingIntake || "XX"} kgs</div>
      <div>Today's output: {data?.shellingOutput || "XX"} kgs</div>
      <div>Turn-around ratio: {data?.shellingTurnAroundRatio || "XX"} %</div>
    </div>
  );
};

export default Shelling;
