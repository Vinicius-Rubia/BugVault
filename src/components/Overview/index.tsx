import React from 'react'
import { CheckCircle, ListChecks, Warning } from "@phosphor-icons/react";
import { useGetChecklistsQuery } from '../../graphql/generated';

import * as C from "./styles";

const results = [
  {
    id: 1,
    icon: <ListChecks  size={32} weight="fill" />,
    title: "Checklists",
    value: 2000,
  },
  {
    id: 2,
    icon: <CheckCircle size={32} weight="fill" />,
    title: "Sucessos",
    value: 1500,
  },
  {
    id: 3,
    icon: <Warning size={32} weight="fill" />,
    title: "Fracassos",
    value: 500,
  },
]

export const Overview: React.FC = () => {
  const { data } = useGetChecklistsQuery();

  const totalChecklists = data?.checklists.length;
  const totalSuccessChecklists = data?.checklists.filter((checklist) => checklist.result === true).length;
  const totalFailedChecklists = data?.checklists.filter((checklist) => checklist.result === false).length;

  return (
    <C.Container>
      <h1>Visão Geral</h1>
      <C.Grid>
        <C.Graphic>
          
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
