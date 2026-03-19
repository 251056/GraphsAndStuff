import { useState } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartDataLabels);
const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    y: {
      beginAtZero: true,
      display: false,
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: '"Micro 5", sans-serif',
          size: 16,
        },
        color: "#5A514C",
      }
    },
    x: {
      grid: {
        display: false
      },
      font: {
        family: '"Micro 5", sans-serif',
        size: 16,
      },
      color: "#5A514C",
    }
  },
  plugins: {
    legend: {
      display: false
    },
    datalabels: {
      anchor: "end",
      align: "top",
      font: {
        family: '"Micro 5", sans-serif',
        size: 18,
        weight: "bold"
      },
      color: "#5A514C"
    }
  }
}


const BarGraph = () => {

  const [scores, setScores] = useState({
    rem: 0,
    tracy: 0,
    frank: 0,
    robert: 0
  });

  const data = {
    labels: Object.keys(scores),
    datasets: [{
      label: "Clock Game",
      data: Object.values(scores),
      backgroundColor: [
        'rgba(164,0,0,0.2)',
        'rgba(103,49,71,0.2)',
        'rgba(0,51,102,0.2)',
        'rgba(65,105,225,0.2)',
      ],
      borderColor: [
        'rgb(164,0,0)',
        'rgb(103,49,71)',
        'rgb(0,51,102)',
        'rgb(65,105,225)',
      ],
      borderWidth: 1
    }]
  };

  return (
    <div>
      <h2>Brain Cells Functioning</h2>

      <button onClick={() => {
        setScores(prev => ({ ...prev, rem: prev.rem + 1 }));
      }}>
        Rem Score +1
      </button>

      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;