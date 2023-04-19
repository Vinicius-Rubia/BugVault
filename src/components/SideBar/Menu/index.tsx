import React, { useState } from 'react'
import { Stack, Gauge, ListChecks, Plug, CheckFat } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useGetCompaniesQuery } from '../../../graphql/generated';
import { FiBarChart2 } from "react-icons/fi";

import * as C from "./styles";

const categories = [
  {
    id: 1,
    category: "Visão Geral",
    to: "/",
    icon: <Gauge size={35} weight="fill" />,
  },
  {
    id: 2,
    category: "Checklists",
    to: "/checklists",
    icon: <ListChecks size={32} weight="fill" />,
  },
  {
    id: 3,
    category: "Compatibilidade",
    to: "/compatibility",
    icon: <CheckFat size={32} weight="fill" />,
  },
  {
    id: 4,
    category: "Gráficos",
    to: "/charts",
    icon: <FiBarChart2 size={32} />,
  },
]

interface MenuProps {
  showMenu: boolean;
}

export const Menu: React.FC<MenuProps> = ({ showMenu }) => {
  const { data } = useGetCompaniesQuery();

  return (
    <C.Container showMenu={showMenu}>
      <C.Companies>
          <h3>Company</h3>
          <ul>
            {data?.companies.map((company) => (
              <C.Item key={company.id}>
                <Link to={`/checklists/${company.name}`}>
                  <Stack size={35} weight="fill" /> <span>{company.name}</span>  
                </Link>
              </C.Item>
            ))}
          </ul>
        </C.Companies>

        <C.Categories>
          <h3>Category</h3>
          <ul>
            {categories.map((category) => (
              <C.Item key={category.id}>
                <Link to={category.to}>
                  {category.icon} <span>{category.category}</span>
                </Link>
              </C.Item>
            ))}
          </ul>
        </C.Categories>
    </C.Container>
  )
}
