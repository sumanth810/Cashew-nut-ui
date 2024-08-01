import React from "react";

const Overview = ({ data }) => {
  const todayIntake = data?.todayIntake || 0;
  const todayOutput = data?.todayOutput || 0;
  const turnAroundRatio =
    todayIntake !== 0 ? ((todayOutput / todayIntake) * 100).toFixed(2) : "0";

  return (
    <div className="dashboard-card p-5 bg-purple-100 shadow-lg rounded-lg border-4 border-purple-500">
      <h3 className="text-xl font-bold mb-6 text-purple-900 italic text-center">
        Overview
      </h3>
      <div className="text-lg font mb-4">Today's intake: {todayIntake} kgs</div>
      <div className="text-lg font mb-4">Today's output: {todayOutput} kgs</div>
      <div className="text-lg font mb-4">
        Turn-around ratio: {turnAroundRatio} %
      </div>
    </div>
  );
};

export default Overview;
