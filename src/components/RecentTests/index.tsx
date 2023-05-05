import React from "react";
import { DateFormatter, createdDateRelativeToNow } from "../../utils/Formatter";
import ClaroImg from "../../assets/images/claro.png";
import ElektroImg from "../../assets/images/elektro.png";
import NegocieImg from "../../assets/images/negocie.png";
import SkyImg from "../../assets/images/sky.png";
import { useSelector } from "react-redux";
import { selectChecklists, } from "../../redux/checklistsSlice";
import { Link } from "react-router-dom";

import * as C from "./styles";

export const RecentTests: React.FC = () => {
  const allChecklists = useSelector(selectChecklists);

  const checklistsOrderned = [...allChecklists.checklists].sort((a: any, b: any) => (a.createdAt - b.createdAt)).slice(0, 4);

  return (
    <C.Container>
      <C.Header>
        <h2>Checklists Recentes</h2>
        <Link to="/checklists">Ver todos</Link>
      </C.Header>

      <C.Grid>
        {checklistsOrderned.length === 0 ? (
          <h3 style={{color: "#FFFFFF"}}>Carregando...</h3>
        ) : (
          checklistsOrderned.map((checklists: any) => (
            <C.Item key={checklists.id} result={checklists.result.toString()}>
              <div className="post">
                <img src={checklists.urlPost} alt="Illustration" />
                <span>{checklists.duration}</span>
              </div>
              <C.Company>
                {checklists.slug == "sky" && <img src={SkyImg} alt="Logo" />}
                {checklists.slug == "neo-energia" && <img src={ElektroImg} alt="Logo" />}
                {checklists.slug == "claro" && <img src={ClaroImg} alt="Logo" />}
                {checklists.slug == "negocie-online" && <img src={NegocieImg} alt="Logo" />}
              </C.Company>
              <C.Info result={checklists.result.toString()}>
                <p>
                  {checklists.company} <span></span>
                </p>
                <h3>{checklists.name}</h3>
                <p>
                  {DateFormatter.format(new Date(checklists.createdAt))}{" "}
                  &#x2022; {createdDateRelativeToNow(checklists.createdAt)}{" "}
                  atrás
                </p>
              </C.Info>
            </C.Item>
          ))
        )}
      </C.Grid>
    </C.Container>
  );
};
