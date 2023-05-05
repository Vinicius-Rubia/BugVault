import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectChecklists } from "../../redux/checklistsSlice";

import * as C from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartCircle: React.FC = () => {
  const allChecklists = useSelector(selectChecklists);

  const totalChecklists = allChecklists.checklists ? allChecklists.checklists.length : 0;
  const totalSuccessChecklists = allChecklists.checklists ? allChecklists.checklists.filter((checklist: any) => checklist.result === true).length : 0;
  const totalFailedChecklists = allChecklists.checklists ? allChecklists.checklists.filter((checklist: any) => checklist.result === false).length : 0;

  const data = {
    labels: ["Sucessos", "Fracassos", "Total de checklists"],
    datasets: [
      {
        labelColor: "#fff",
        data: [totalSuccessChecklists, totalFailedChecklists, totalChecklists],
        backgroundColor: [
          "#66CA74",
          "#E23A3A",
          "#73CAD6",
        ],
        borderColor: [
          "#66CA74",
          "#E23A3A",
          "#73CAD6",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right' as const,
          labels: {
          color: '#FFF'
        }
      }
    }
  }

  return (
    <C.Container>
      <Doughnut options={options} data={data} />
    </C.Container>
  );
};
