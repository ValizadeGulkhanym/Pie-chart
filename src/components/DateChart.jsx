import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import axios from "axios";
import DropDown from "./Dropdown";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);
const DateChart = () => {
  const [charts, setCharts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const apiUrl = `https://lurialab.com/backend/index.php/reporting/get_count_stats?token=A_Ds_s_DDKAJDN_VK588as5d8___________8f48d4558a8as741d_ADSDVD`;
        const { data } = await axios.get(apiUrl);
        console.log(data);
        setCharts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();
  }, []);
  const labels = charts.assignment_completion_duration?.map(
    (item) => item.average_minutes
  );
  const chartData = {
    labels: charts.assignment_date_questionnaire_count?.map(
      (item) => item.month
    ),
    datasets: [
      {
        label: "count",
        data: charts.assignment_date_questionnaire_count?.map(
          (item) => item.count
        ),
        fill: false,
        borderColor: "rgb(57, 75, 230)",
        tension: 0.1,
      },
    ],
  };

  const info = {
    labels: charts.assignment_completion_duration?.map(
      (item) => item.min_minutes
    ),

    datasets: [
      {
        label: "minutes",
        data: charts.assignment_completion_duration?.map(
          (item) => item.max_minutes
        ),
        backgroundColor: [
          "#e74a3b",
          "orange",
          "crimson",
          "#36b9cc",
          "#4e73df",
          "Lightgreen",
          "#1cc88a",
          "lightpink",
          "pink",
          "yellowgreen",
          "green",
          "yellow",
          "lightorange",
          "orange",
          "violet",
          "purple",
        ],
        cutout: 85,
        radius: 85,
        borderRadius: 3,
      },
    ],
  };

  return (
    <div className="app">
      <div className="box ">
        <h2>Questionnaire count per month</h2>
        <DropDown />
        <Line data={chartData} />
      </div>
      <div className="box">
        <h2>Completion duration</h2>
        <Bar data={info} />
      </div>
    </div>
  );
};

export default DateChart;
