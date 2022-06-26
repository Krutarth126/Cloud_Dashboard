import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = [
  "Nov-21",
  "Dec-21",
  "Jan-22",
  "Feb-22",
  "Mar-22",
  "April-22",
  "May-22",
];

const data = {
  labels,
  datasets: [
    {
      type: "bar",
      label: "Invoice Spend",
      backgroundColor: "rgb(252 133 12)",
      data: labels.map(() => Math.floor(Math.random() * 100000)),
    },
  ],
};

export default function BarGraph({ title }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  return <Bar options={options} data={data} />;
}
