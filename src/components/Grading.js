import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grading = ({ data }) => {
  // Extract grading-related data from props
  const whiteWholesOutput = data?.whiteWholesOutput || 0;
  const scorchedWholesOutput = data?.scorchedWholesOutput || 0;
  const cashewFormsOutput = data?.cashewFormsOutput || 0;
  const gradingOutput =
    whiteWholesOutput + scorchedWholesOutput + cashewFormsOutput; // Calculate total output
  const gradingIntake = data?.gradingIntake || 0;

  // Calculate turn-around ratio
  const turnAroundRatio =
    gradingIntake !== 0
      ? ((gradingOutput / gradingIntake) * 100).toFixed(2)
      : "0";

  // Data for pie chart
  const chartData = {
    labels: ["White Wholes", "Scorched Wholes", "Cashew Forms"],
    datasets: [
      {
        label: "Grading Output",
        data: [whiteWholesOutput, scorchedWholesOutput, cashewFormsOutput],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Colors for chart
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="dashboard-card p-5 bg-purple-100 shadow-lg rounded-lg border-4 border-purple-500">
      <h3 className="text-xl font-bold mb-6 text-purple-900 italic text-center">
        Grading
      </h3>
      <div className="text-lg font mb-4">
        Today's intake: {gradingIntake} kgs
      </div>
      <div className="text-lg font mb-4">
        Today's output: {gradingOutput} kgs
      </div>
      <div className="text-lg font mb-4">
        Turn-around ratio: {turnAroundRatio} %
      </div>
      <div className="mt-5">
        {/* Render pie chart */}
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default Grading;
