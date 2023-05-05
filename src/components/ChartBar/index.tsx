import React from 'react'

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
)

import { useSelector } from 'react-redux';
import { selectChecklists } from '../../redux/checklistsSlice';

import * as C from "./styles";

export const ChartBar: React.FC = () => {
  const allChecklists = useSelector(selectChecklists);

  const today = new Date();
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);

  const isSameDate = (date1: any, date2: any) => {
    return date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate();
  };

  const filterDataByDate = (data: any) => {
    const isToday = (itemDate: any) => isSameDate(itemDate, today);
    const isYesterday = (itemDate: any) => isSameDate(itemDate, yesterday);

    const todayData = data.filter((item: any) => isToday(new Date(item.createdAt)));
    const yesterdayData = data.filter((item: any) => isYesterday(new Date(item.createdAt)));

    return { todayData, yesterdayData };
  };

  const { todayData, yesterdayData } = filterDataByDate(allChecklists.checklists);
  
  const countByResult = (data: any, result: boolean) => data.filter((checklist: any) => checklist.result === result).length;

  const todaySuccessChecklists = countByResult(todayData, true);
  const todayFailedChecklists = countByResult(todayData, false);

  const yesterdaySuccessChecklists = countByResult(yesterdayData, true);
  const yesterdayFailedChecklists = countByResult(yesterdayData, false);

  const data = {
    labels: ["Ontem", "Hoje"],
    datasets: [{
      label: "Sucessos",
      data: [yesterdaySuccessChecklists, todaySuccessChecklists],
      backgroundColor: "#66CA74",
      hoverBackgroundColor: "#05b61f",
    }, {
      label: "Fracassos",
      data: [yesterdayFailedChecklists, todayFailedChecklists],
      backgroundColor: "#E23A3A",
      hoverBackgroundColor: "#d60404",
    }, {
      label: "Total de checklists",
      data: [yesterdaySuccessChecklists + yesterdayFailedChecklists, todaySuccessChecklists + todayFailedChecklists],
      backgroundColor: "#73CAD6",
      hoverBackgroundColor: "#00e1ff",
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
    <C.ChartBar data={data} options={options}></C.ChartBar>
  )
}
