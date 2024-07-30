import React from "react";

const Overview = ({ data }) => {
  return (
    <div className="dashboard-card">
      <h3>Overview</h3>
      <div>Today's intake: {data?.todayIntake || "XX"} kgs</div>
      <div>Today's output: {data?.todayOutput || "XX"} kgs</div>
      <div>Turn-around ratio: {data?.turnAroundRatio || "XX"} %</div>
    </div>
  );
};

export default Overview;
