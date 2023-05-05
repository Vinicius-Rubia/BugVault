import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ClaroImg from "../../assets/images/claro.png";
import ElektroImg from "../../assets/images/elektro.png";
import NegocieImg from "../../assets/images/negocie.png";
import SkyImg from "../../assets/images/sky.png";
import { DateFormatter, createdDateRelativeToNow } from '../../utils/Formatter';
import { selectChecklists } from '../../redux/checklistsSlice';
import { useSelector } from 'react-redux';

import * as C from "./styles";
import { fetchChecklists } from '../../services/checklistService';

export const SearchChecklists: React.FC = () => {
  const { search } = useParams<{ search: string }>();
  const checklists = useSelector(selectChecklists);

  useEffect(() => {
    if (checklists.checklists.length === 0) {
      fetchChecklists();
    }
  }, [checklists.checklists]);

  const filterChecklists = checklists.checklists.filter((checklist: any) => checklist.name.includes(search));

  return (
    <C.Container>
      <h1>{filterChecklists.length > 0 ? `Resultados para: ${search}` : `Nenhum resultado encontrado para: ${search}`}</h1>

      <C.Grid>
        {filterChecklists.length > 0 && (
          filterChecklists.map((checklist: any) => (
            <C.Item key={checklist.id} result={checklist.result.toString()}>
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
          ))
        )}
      </C.Grid>
    </C.Container>
  )
}
