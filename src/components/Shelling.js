import React from "react";

const Shelling = ({ data }) => {
  const shellingIntake = data?.shellingIntake || 0;
  const shellingOutput = data?.shellingOutput || 0;
  const turnAroundRatio =
    shellingIntake !== 0
      ? ((shellingOutput / shellingIntake) * 100).toFixed(2)
      : "0";

  return (
    <div className="dashboard-card p-5 bg-purple-100 shadow-lg rounded-lg border-4 border-purple-500">
      <h3 className="text-xl font-bold mb-6 text-purple-900 italic text-center">
        Shelling
      </h3>
      <div className="text-lg font mb-4">
        Today's intake: {shellingIntake} kgs
      </div>
      <div className="text-lg font mb-4">
        Today's output: {shellingOutput} kgs
      </div>
      <div className="text-lg font mb-4">
        Turn-around ratio: {turnAroundRatio} %
      </div>
    </div>
  );
};

export default Shelling;
