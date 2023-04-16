import React from 'react'
import { CheckCircle, ListChecks, Warning } from "@phosphor-icons/react";

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
  return (
    <C.Container>
      <h1>Visão Geral</h1>
      <C.Grid>
        <C.Graphic>
          
        </C.Graphic>
        <C.Info>
          {results.map((result) => (
            <C.Item key={result.value}>
              {result.icon}
              <div>
                <span>{result.title}</span>
                <span>{result.value}</span>
              </div>
            </C.Item>
          ))}
        </C.Info>
      </C.Grid>
    </C.Container>
  )
}
