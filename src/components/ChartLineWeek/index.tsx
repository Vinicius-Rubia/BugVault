import React from 'react'
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
)

export const ChartLineWeek: React.FC = () => {

  const data = {
    labels: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    datasets: [{
      label: "Sucessos",
      data: [2, 7, 1, 3, 2, 2, 3],
      borderColor: "#66CA74",
      hoverBorderColor: "#ffffff",
      backgroundColor: "#66CA74",
      hoverBackgroundColor: "#05b61f",
      pointBorderWidth: 4
    }, {
      label: "Fracassos",
      data: [6, 2, 5, 1, 8, 9, 5],
      borderColor: "#E23A3A",
      hoverBorderColor: "#ffffff",
      backgroundColor: "#E23A3A",
      hoverBackgroundColor: "#d60404",
      pointBorderWidth: 4
    }, {
      label: "Total de checklists",
      data: [8, 9, 6, 4, 10, 11, 8],
      borderColor: "#73CAD6",
      hoverBorderColor: "#ffffff",
      backgroundColor: "#73CAD6",
      hoverBackgroundColor: "#00e1ff",
      pointBorderWidth: 4
    }]
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
          labels: {
          color: '#FFF'
        }
      }
    },
    scales: {
      y: {
        ticks: { color: '#FFF', beginAtZero: true },
        grid: { color: '#ffffff30'}
      },
      x: {
        ticks: { color: '#FFF', beginAtZero: true },
        grid: { color: '#ffffff30'}
      }
    }
  }

  return (
    <Line data={data} options={options}></Line>
  )
}
