import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(Tooltip, Legend, ArcElement);
const DoughnutChart = () => {
  const [charts, setCharts] = useState({
    assignment_questionnaire_count: [],
    assignment_specialist_count: [],
  });

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
    labels: charts.assignment_specialist_count?.map(
      (item) => item.full_name
    ) || ["lightblue", "blue", "green"],
    datasets: [
      {
        label: "My First Dataset",
        data:
          charts.assignment_questionnaire_count?.map((item) => item.count) ||
          [],
        backgroundColor: [
          "Lightblue",
          "Blue",
          "Lightgreen",
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
        borderWidth: 1,
      },
    ],
  };
  let options = {
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };
  return (
    <div className="chart1">
      <h2>Questionnaire Counts</h2>
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default DoughnutChart;
