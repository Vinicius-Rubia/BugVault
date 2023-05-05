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

export const ChartLineMonth: React.FC = () => {

  const data = {
    labels: ["Jan", "Fev", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
      label: "Sucessos",
      data: [54, 67, 48, 32, 91, 49, 32, 45, 58, 69, 22, 45],
      borderColor: "#66CA74",
      hoverBorderColor: "#ffffff",
      backgroundColor: "#66CA74",
      hoverBackgroundColor: "#05b61f",
      pointBorderWidth: 4
    }, {
      label: "Fracassos",
      data: [87, 99, 15, 10, 22, 26, 58, 78, 12, 30, 15, 21],
      borderColor: "#E23A3A",
      hoverBorderColor: "#ffffff",
      backgroundColor: "#E23A3A",
      hoverBackgroundColor: "#d60404",
      pointBorderWidth: 4
    }, {
      label: "Total de checklists",
      data: [141, 166, 123, 156, 168, 184, 198, 120, 150, 172, 200, 258],
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
