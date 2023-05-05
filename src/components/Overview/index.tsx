import React, { useEffect } from "react";
import { CheckCircle, ListChecks, Warning } from "@phosphor-icons/react";
import { useSelector } from "react-redux";
import { selectChecklists } from "../../redux/checklistsSlice";
import { ChartBar } from "../ChartBar";
import { fetchChecklists } from "../../services/checklistService";

import * as C from "./styles";

export const Overview: React.FC = () => {
  const allChecklists = useSelector(selectChecklists);

  useEffect(() => {
    if (allChecklists.checklists.length === 0) {
      fetchChecklists();
    }
  }, [allChecklists.checklists]);

  const totalChecklists = allChecklists.checklists ? allChecklists.checklists.length : 0;
  const totalSuccessChecklists = allChecklists.checklists ? allChecklists.checklists.filter((checklist: any) => checklist.result === true).length : 0;
  const totalFailedChecklists = allChecklists.checklists ? allChecklists.checklists.filter((checklist: any) => checklist.result === false).length : 0;

  return (
    <C.Container>
      <h1>Visão Geral</h1>
      <C.Grid>
        <C.Graphic>
          <ChartBar />
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
  );
};
