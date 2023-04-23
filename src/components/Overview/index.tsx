import React, { useState, useEffect } from 'react'
import { CheckCircle, ListChecks, Warning } from "@phosphor-icons/react";
import { ChartLine } from '../Charts/ChartLine';
import { api } from '../../lib/axios';

import * as C from "./styles";

export const Overview: React.FC = () => {
  const [ checklists, setChecklists ] = useState([]);

  useEffect(() => {
    const fetchChecklists = async() => {
      const checklistsResponse = await api.get("checklists");
      
      setChecklists(checklistsResponse.data);
    }

    fetchChecklists();
  }, []);

  const totalChecklists = checklists.length;
  const totalSuccessChecklists = checklists.filter((checklist: any) => checklist.result === true).length;
  const totalFailedChecklists = checklists.filter((checklist: any) => checklist.result === false).length;

  return (
    <C.Container>
      <h1>Visão Geral</h1>
      <C.Grid>
        <C.Graphic>
          <ChartLine />
        </C.Graphic>
        <C.Info>
          <C.Item>
            <ListChecks size={32} weight="fill" />
            <div>
              <span>Checklists</span>
              <span>{totalChecklists}</span>
            </div>
          </C.Item>
          <C.Item>
            <CheckCircle size={32} weight="fill" />
            <div>
              <span>Sucessos</span>
              <span>{totalSuccessChecklists}</span>
            </div>
          </C.Item>
          <C.Item>
            <Warning size={32} weight="fill" />
            <div>
              <span>Fracassos</span>
              <span>{totalFailedChecklists}</span>
            </div>
          </C.Item>
        </C.Info>
      </C.Grid>
    </C.Container>
  )
}
