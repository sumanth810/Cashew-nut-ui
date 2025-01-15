import React from "react";

const Peeling = ({ data }) => {
  // Extract peeling-specific data from props
  const peelingIntake = data?.peelingIntake || 0; // Intake for peeling
  const peelingOutput = data?.peelingOutput || 0; // Output from peeling

  // Calculate turn-around ratio
  const turnAroundRatio =
    peelingIntake !== 0
      ? ((peelingOutput / peelingIntake) * 100).toFixed(2)
      : "0";

  return (
    <div className="dashboard-card p-5 bg-purple-100 shadow-lg rounded-lg border-4 border-purple-500">
      <h3 className="text-xl font-bold mb-6 text-purple-900 italic text-center">
        Peeling
      </h3>
      {/* Display peeling intake */}
      <div className="text-lg font mb-4">
        Today's intake: {peelingIntake} kgs
      </div>
      {/* Display peeling output */}
      <div className="text-lg font mb-4">
        Today's output: {peelingOutput} kgs
      </div>
      {/* Display turn-around ratio */}
      <div className="text-lg font mb-4">
        Turn-around ratio: {turnAroundRatio} %
      </div>
    </div>
  );
};

export default Peeling;
