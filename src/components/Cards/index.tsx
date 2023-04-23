import React, { useState, useEffect } from "react";
import { DateFormatter, publishedDateRelativeToNow } from "../../utils/Formatter";
import ClaroImg from "../../assets/images/claro.png";
import ElektroImg from "../../assets/images/elektro.png";
import NegocieImg from "../../assets/images/negocie.png";
import SkyImg from "../../assets/images/sky.png";

import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

import * as C from "./styles";

export const Cards: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [checklists, setChecklists] = useState([]);

  useEffect(() => {
    const fetchChecklistsBySlug = async () => {
      const checklistsResponse = await api.get(`checklists?slug=${slug}`, {
        params: {
          _sort: "createdAt",
          _order: "desc",
        },
      });
      setChecklists(checklistsResponse.data);
    };

    const fetchChecklists = async () => {
      const checklistsResponse = await api.get(`checklists`, {
        params: {
          _sort: "createdAt",
          _order: "desc",
        },
      });
      setChecklists(checklistsResponse.data);
    };

    slug ? fetchChecklistsBySlug() : fetchChecklists();
  }, [slug]);

  return (
    <C.Container>
      <h1>{checklists.length === 0 ? "Carregando..." : `Checklists ${slug ? slug?.replace(/-/g, ' ') : ""}`}</h1>

      <C.Grid>
        {checklists.map((checklist: any, index) => (
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
                {publishedDateRelativeToNow(checklist.createdAt)} atrás
              </p>
            </C.Info>
          </C.Item>
        ))}
        {/* {dataChecklists != undefined
          ? dataChecklists?.checklists.map((checklists: any) => (
              <C.Item key={checklists.id} result={checklists.result.toString()}>
                <div className="post">
                  {checklists.company === "SKY" && <img src={checklists.imagePost.url} alt="Illustration" />}
                  {checklists.company === "Claro" && <img src={checklists.imagePost.url} alt="Illustration" />}
                  {checklists.company === "Neo Energia" && <img src={checklists.imagePost.url} alt="Illustration" />}
                  <span>{checklists.duration}</span>
                </div>
                <C.Company>
                  <img src={checklists.logo.url} alt="Logo" />
                </C.Company>
                <C.Info result={checklists.result.toString()}>
                  <p>
                    {checklists.company} <span></span>
                  </p>
                  <h3>{checklists.name}</h3>
                  <p>
                    {DateFormatter.format(new Date(checklists.createdAt))}{" "}
                    &#x2022; {publishedDateRelativeToNow(checklists.createdAt)}{" "}
                    atrás
                  </p>
                </C.Info>
              </C.Item>
            )) */}
        {/* : checklists.map((checklists: any, index) => ( */}
        {/* <C.Item key={index} result={checklists.result.toString()}>
                 <div className="post"> */}
        {/* {checklists.company === "SKY" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
        {/* {checklists.company === "Claro" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
        {/* {checklists.company === "Neo Energia" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
        {/* <span>{checklists.duration}</span>
                 </div>
                 <C.Company> */}
        {/* <img src={checklists.logo.url} alt="Logo" /> */}
        {/* </C.Company>
                 <C.Info result={checklists.result.toString()}>
                   <p>
                     {checklists.company} <span></span>
                   </p>
                   <h3>{checklists.name}</h3>
                   <p>
                     {DateFormatter.format(new Date(checklists.createdAt))}{" "}
                     &#x2022; {publishedDateRelativeToNow(checklists.createdAt)}{" "}
                     atrás
                   </p>
                 </C.Info>
               </C.Item> */}
        {/* ))} */}
      </C.Grid>
    </C.Container>
  );
};
