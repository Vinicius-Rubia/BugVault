import React from 'react'
import * as C from "./styles";

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

export const ChartLine: React.FC = () => {
  const data = {
    labels: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
    datasets: [{
      label: "Fracassos",
      data: [2, 0, 1, 3, 2, 2, 3],
      backgroundColor: "#ff0000",
      borderColor: "#ff000099",
      pointBorderColor: "transparent",
      hoverBackgroundColor: "#ffffff",
      hoverBorderColor: "#ffffff",
      pointBorderWidth: 4
    }, {
      label: "Sucessos",
      data: [4, 4, 6, 5, 6, 6, 7],
      backgroundColor: "#00ff26",
      borderColor: "#00ff267f",
      hoverBackgroundColor: "#ffffff",
      hoverBorderColor: "#ffffff",
      pointBorderColor: "transparent",
      pointBorderWidth: 4
    }]
  };

  const options = {
    responsive: true,
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
    <C.ChartLine data={data} options={options}></C.ChartLine>
  )
}
