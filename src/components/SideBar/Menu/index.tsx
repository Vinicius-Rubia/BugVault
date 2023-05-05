import React, { useState, useEffect } from "react";
import { Stack, Gauge, ListChecks, CheckFat} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { FiBarChart2 } from "react-icons/fi";
import { api } from "../../../lib/axios";

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
    category: "Suporte",
    to: "/suport",
    icon: <CheckFat size={32} weight="fill" />,
  },
  {
    id: 4,
    category: "Gráficos",
    to: "/charts",
    icon: <FiBarChart2 size={32} />,
  },
];

interface MenuProps {
  showMenu: boolean;
}

export const Menu: React.FC<MenuProps> = ({ showMenu }) => {

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchChecklists = async () => {
      try {
        const companiesResponse = await api.get("companies");
        setCompanies(companiesResponse.data);
      } catch (e: any) {
        console.log(e);
      }
    };

    fetchChecklists();
  }, []);

  return (
    <C.Container showMenu={showMenu}>
      <C.Companies>
        <h3>Company</h3>
        {companies.length === 0 ? (
          <h3 style={{ color: "#FFFFFF" }}>Carregando...</h3>
        ) : (
          <ul>
            {companies.map((company: any) => (
              <C.Item key={company.id}>
                <Link to={`/checklists/${company.slug}`}>
                  <Stack size={35} weight="fill" /> <span>{company.name}</span>
                </Link>
              </C.Item>
            ))}
          </ul>
        )}
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
  );
};
