import React from "react";
import {
  Chart as ChartJS,
  ChartType,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  LineController,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import 'chart.js/auto';

const randomPoints = [
  [65, 59, 100, 80, 10, 56, 72, 45, 67, 55, 42],
  [10, 50, 30, 84, 38, 90, 42, 77, 100, 0, 100],
  [0, 59, 100, 80, 10, 56, 100, 0, 26, 23, 32],
  [100, 42, 77, 100, 0, 100, 72, 45, 67, 55, 42],
  [0, 100, 47, 19, 90, 34, 25, 65, 78, 0, 32],
];

const getRandomPoints = () => {
  const rndInt = Math.floor(Math.random() * 4) + 1;
  return randomPoints[rndInt];
};

ChartJS.register(
  LinearScale,
  LineController,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line" as ChartType,
      label: "Exponential",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: getRandomPoints(),
    },
    {
      type: "bar" as ChartType,
      label: "Sale cap",
      backgroundColor: "rgb(75, 192, 192)",
      data: getRandomPoints(),
      borderColor: "white",
      borderWidth: 2,
    },
    {
      type: "bar" as ChartType,
      label: "Purchase cap",
      backgroundColor: "rgb(53, 162, 235)",
      data: getRandomPoints(),
    },
  ],
};

const CoinGraphic = () => {
  return (
    <div>
      <Chart type="bar" data={data} />{" "}
    </div>
  );
};

export default CoinGraphic;
