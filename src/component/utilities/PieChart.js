import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Top 10 Drill Dropdown",
    },
  },
};

export const data = {
  labels: [
    "AwsShield",
    "AmazonQuickSight",
    "AmazonEC2",
    "AmazonRDS",
    "AmazonMQ",
    "AmazonFSx",
    "AmazonS3",
    "AmazonVpc",
    "AWSSecurity",
    "Others",
  ],
  datasets: [
    {
      data: [120, 140, 16, 39, 92, 120, 122, 178, 221, 90],
      backgroundColor: [
        "blue",
        "skyblue",
        "green",
        "violet",
        "purple",
        "pink",
        "darkblue",
        "royalblue",
        "seagreen",
        "red",
      ],
      borderColor: [
        "blue",
        "skyblue",
        "green",
        "violet",
        "purple",
        "pink",
        "darkblue",
        "royalblue",
        "seagreen",
        "red",
      ],
      borderWidth: 1,
    },
  ],
};

export default function PieChart() {
  return <Doughnut data={data} options={options} />;
}
