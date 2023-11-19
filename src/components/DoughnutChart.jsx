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
    labels: charts.assignment_questionnaire_count?.map(
      (item) => item.code
    ) || ["lightblue", "blue", "green"],
    datasets: [
      {
        label: "count",
        data:
          charts.assignment_questionnaire_count?.map((item) => item.count),
        backgroundColor: [
          "#36b9cc",
          "#4e73df",
          "Lightgreen",
          "#1cc88a",
          'crimson',
          '#e74a3b',
          'orange',
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
  const info = {
    labels: charts.assignment_specialist_count?.map((item) => item.full_name),

    datasets: [
      {
        label: 'title',
        data: charts.assignment_specialist_count?.map((item) => item.count),
        backgroundColor: [
          "#36b9cc",
          "#4e73df",
          "Lightgreen",
          "#1cc88a",
          'crimson',
          '#e74a3b',
          'orange',
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
  const chartInfo = {
    labels: charts.user_expertise_count?.map((item) => item.user_expertise),

    datasets: [
      {
        label: 'title',
        data: charts.user_expertise_count?.map((item) => item.count),
        backgroundColor: [
          "#36b9cc",
          "#4e73df",
          "Lightgreen",
          "#1cc88a",
          'crimson',
          '#e74a3b',
          'orange',
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
  const patientCount = {
    labels: charts.specialist_patient_count?.map((item) => item.full_name),

    datasets: [
      {
        label: 'title',
        data: charts.specialist_patient_count?.map((item) => item.patient_count),
        backgroundColor: [
          "#36b9cc",
          "#4e73df",
          "Lightgreen",
          "#1cc88a",
          'crimson',
          '#e74a3b',
          'orange',
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
    <div className="box">
      <h2>Questionnaire Counts</h2>
      <Doughnut data={chartData}/>
      </div>
      <div className="box">
      <h2>Specialist Counts</h2>
      <Doughnut data={info}/>
      </div>
      <div className="box">
      <h2>Specialist patient count</h2>
      <Doughnut data={patientCount}/>
      </div>
      <div className="box">
      <h2>User expertise count</h2>
      <Doughnut data={chartInfo}/>
      </div>

    </div>
  );
};

export default DoughnutChart;
