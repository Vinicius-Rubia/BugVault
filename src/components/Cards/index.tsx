import React from "react";
import {
  DateFormatter,
  publishedDateRelativeToNow,
} from "../../utils/Formatter";
import { useGetChecklistsQuery } from "../../graphql/generated";

import * as C from "./styles";

interface dataProps {
  dataChecklists: any;
}

export const Cards: React.FC<dataProps> = ({ dataChecklists }) => {
  const { data } = useGetChecklistsQuery();

  return (
    <C.Container>
      <C.Grid>
        {dataChecklists != undefined
          ? dataChecklists?.checklists.map((checklists: any) => (
              <C.Item key={checklists.id} result={checklists.result.toString()}>
                <div className="post">
                  {/* {checklists.company === "SKY" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
                  {/* {checklists.company === "Claro" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
                  {/* {checklists.company === "Neo Energia" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
                  <span>{checklists.duration}</span>
                </div>
                <C.Company>
                  {/* <img src={checklists.logo.url} alt="Logo" /> */}
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
            ))
          : data?.checklists.map((checklists: any) => (
              <C.Item key={checklists.id} result={checklists.result.toString()}>
                <div className="post">
                  {/* {checklists.company === "SKY" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
                  {/* {checklists.company === "Claro" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
                  {/* {checklists.company === "Neo Energia" && <img src={checklists.imagePost.url} alt="Illustration" />} */}
                  <span>{checklists.duration}</span>
                </div>
                <C.Company>
                  {/* <img src={checklists.logo.url} alt="Logo" /> */}
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
            ))}
      </C.Grid>
    </C.Container>
  );
};
