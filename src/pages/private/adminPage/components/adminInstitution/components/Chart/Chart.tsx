import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { Data } from "./Data";
Chart.register(...registerables);

const LineChart = () => {
  const ratingData = {
    labels: Data.map((data) => data.day),
    datasets: [
      {
        fill: true,
        backgroundColor: "rgba(255, 109, 0, 1)",
        data: Data.map((data) => data.rating),
        borderColor: "yellow",
        tension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
    },
    scales: {
      xAxes: {
        ticks: {
          color: "white",
          font: {
            size: 16,
            weight: "bold",
          },
          padding: 0,
        },
      },
      yAxes: {
        display: false,
      },
    },
  };

  return (
    <>
      <Line
        style={{ width: "100%", maxWidth: "960px", height: "100%", maxHeight: "200px" }}
        data={ratingData}
        options={options}
      />
    </>
  );
};

export default LineChart;
