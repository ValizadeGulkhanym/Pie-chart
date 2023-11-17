import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(Tooltip, Legend, ArcElement);
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

  const chartData = {
    labels: charts.assignment_date_questionnaire_count?.map(
      (item) => item.code
    ),

    datasets: [
      {
        label: "count",
        data: charts.assignment_date_questionnaire_count?.map(
          (item) => item.count
        ),
        backgroundColor: [
          "#36b9cc",
          "#4e73df",
          "Lightgreen",
          "#1cc88a",
          "crimson",
          "#e74a3b",
          "orange",
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
    <div className="box">
      <h2>Date</h2>
      <Doughnut data={chartData} />
    </div>
  );
};

export default DateChart;
