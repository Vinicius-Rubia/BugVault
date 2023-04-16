import React from 'react'
import SkyIcon from "../../assets/images/sky.png";
import NeoIcon from "../../assets/images/elektro.png";
import ClaroIcon from "../../assets/images/claro.png";
import NegocieIcon from "../../assets/images/negocie.png";
import SkyImg from "../../assets/images/skyPost.png";
import NeoImg from "../../assets/images/neoPost.png";
import ClaroImg from "../../assets/images/claroPost.png";
import NegocieImg from "../../assets/images/negociePost.png";

import * as C from "./styles";

const data = {
  checklists: [
    {
      id: 1,
      result: "true",
      company: "SKY",
      duration: "1.5 min",
      name: "Portal Webchat",
      imgPost: SkyImg,
      icon: SkyIcon,
      createdAt: "15/04/2023",
    },
    {
      id: 2,
      result: "false",
      company: "Neo Energia",
      duration: "0.49 sec",
      name: "Neo Coelba",
      imgPost: NeoImg,
      icon: NeoIcon,
      createdAt: "15/04/2023",
    },
    {
      id: 3,
      result: "true",
      company: "Claro",
      duration: "2 min",
      name: "Portal Negociação",
      imgPost: ClaroImg,
      icon: ClaroIcon,
      createdAt: "15/04/2023",
    },
    {
      id: 4,
      result: "false",
      company: "Negocie Online",
      duration: "0.30 sec",
      name: "API's Monitoria - SEQ",
      imgPost: NegocieImg,
      icon: NegocieIcon,
      createdAt: "15/04/2023",
    },
  ]
}

export const RecentTests: React.FC = () => {
  return (
    <C.Container>
      <h2>Checklists Recentes</h2>

      <C.Grid>
        {data?.checklists.map((checklists) => (
            <C.Item key={checklists.id} result={checklists.result}>
              <div className="post">
                <img src={checklists.imgPost} alt="Illustration" />
                <span>{checklists.duration}</span>
              </div>
              <C.Company>
                <img src={checklists.icon} alt="Logo" />
              </C.Company>
              <C.Info result={checklists.result}>
                <p>{checklists.company} <span></span></p>
                <h3>{checklists.name}</h3>
                <p>{checklists.createdAt} &#x2022; 2 minutos atrás</p>
              </C.Info>
            </C.Item>
          ))}
      </C.Grid>
    </C.Container>
  )
}
