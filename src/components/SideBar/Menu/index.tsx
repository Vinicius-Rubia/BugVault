import React from 'react'
import { Buildings } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import * as C from "./styles";

const companies = [
  {
    id: 1,
    company: "Negocie",
    icon: <Buildings size={35} />,
  },
  {
    id: 2,
    company: "SKY",
    icon: <Buildings size={35} />,
  },
  {
    id: 3,
    company: "Neo Energia",
    icon: <Buildings size={35} />,
  },
  {
    id: 4,
    company: "Claro",
    icon: <Buildings size={35} />,
  },
  {
    id: 5,
    company: "Kroton",
    icon: <Buildings size={35} />,
  },
]

const categories = [
  {
    id: 1,
    category: "Performance",
    icon: <Buildings size={35} />,
  },
  {
    id: 2,
    category: "Segurança",
    icon: <Buildings size={35} />,
  },
  {
    id: 3,
    category: "Compatibilidade",
    icon: <Buildings size={35} />,
  },
  {
    id: 4,
    category: "Integração",
    icon: <Buildings size={35} />,
  },
]

interface MenuProps {
  showMenu: boolean;
}

export const Menu: React.FC<MenuProps> = ({ showMenu }) => {
  return (
    <C.Container showMenu={showMenu}>
      <C.Companies>
          <h3>Company</h3>
          <ul>
            {companies.map((company) => (
              <li key={company.id}>
                <Link to="#">
                  {company.icon} <span>{company.company}</span>  
                </Link>
              </li>
            ))}
          </ul>
        </C.Companies>

        <C.Categories>
          <h3>Category</h3>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to="#">
                  {category.icon} <span>{category.category}</span>
                </Link>
              </li>
            ))}
          </ul>
        </C.Categories>
    </C.Container>
  )
}
