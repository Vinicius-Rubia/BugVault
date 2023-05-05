import React, { useEffect } from "react";
import ClaroImg from "../../assets/images/claro.png";
import ElektroImg from "../../assets/images/elektro.png";
import NegocieImg from "../../assets/images/negocie.png";
import SkyImg from "../../assets/images/sky.png";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectChecklists } from "../../redux/checklistsSlice";
import { DateFormatter, createdDateRelativeToNow } from "../../utils/Formatter";
import { fetchChecklists } from "../../services/checklistService";

import * as C from "./styles";

export const Cards: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const checklists = useSelector(selectChecklists);

  useEffect(() => {
    if (checklists.checklists.length === 0) {
      fetchChecklists();
    }
  }, [checklists.checklists]);

  const checklistsBySlug = slug
    ? checklists.checklists.filter((checklists: any) => checklists.slug == slug)
    : checklists.checklists;

  return (
    <C.Container>
      <h1>{checklistsBySlug.length === 0 ? "Carregando..." : `Checklists ${slug ? slug?.replace(/-/g, ' ') : ""}`}</h1>

      <C.Grid>
        {checklistsBySlug.map((checklist: any, index: any) => (
          <C.Item key={index} result={checklist.result.toString()}>
            <div className="post">
              <img src={checklist.urlPost} alt="Illustration" />
              <span>{checklist.duration}</span>
            </div>

            <C.Company>
              {checklist.slug == "sky" && <img src={SkyImg} alt="Logo" />}
              {checklist.slug == "neo-energia" && <img src={ElektroImg} alt="Logo" />}
              {checklist.slug == "claro" && <img src={ClaroImg} alt="Logo" />}
              {checklist.slug == "negocie-online" && <img src={NegocieImg} alt="Logo" />}
            </C.Company>
            <C.Info result={checklist.result.toString()}>
              <p>
                {checklist.company} <span></span>
              </p>
              <h3>{checklist.name}</h3>
              <p>
                {DateFormatter.format(new Date(checklist.createdAt))} &#x2022;{" "}
                {createdDateRelativeToNow(checklist.createdAt)} atrás
              </p>
            </C.Info>
          </C.Item>
        ))}
      </C.Grid>
    </C.Container>
  );
};
