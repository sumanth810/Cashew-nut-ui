import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Grading = ({ data }) => {
  const chartData = {
    labels: ["White Wholes", "Scorched Wholes", "Cashew Forms"],
    datasets: [
      {
        label: "Grading Output",
        data: [
          data?.whiteWholesOutput || 12,
          data?.scorchedWholesOutput || 5,
          data?.cashewFormsOutput || 8,
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="dashboard-card">
      <h3>Grading</h3>
      <div>Today's intake: {data?.gradingIntake || "XX"} kgs</div>
      <div>Today's output: {data?.todayOutput || "XX"} kgs</div>
      <div>Turn-around ratio: {data?.turnAroundRatio || "XX"} %</div>
      <div>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default Grading;
