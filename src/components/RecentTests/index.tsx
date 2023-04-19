import React from 'react'
import { useGetRecentsChecklistsQuery } from '../../graphql/generated';
import { DateFormatter, publishedDateRelativeToNow } from '../../utils/Formatter';

import * as C from "./styles";

export const RecentTests: React.FC = () => {
  const { data } = useGetRecentsChecklistsQuery();

  return (
    <C.Container>
      <h2>Checklists Recentes</h2>

      <C.Grid>
        {data?.checklists.map((checklists) => (
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
                <p>{checklists.company} <span></span></p>
                <h3>{checklists.name}</h3>
                <p>{DateFormatter.format(new Date(checklists.publishedAt))} &#x2022; {publishedDateRelativeToNow(checklists.publishedAt)} atrás</p>
              </C.Info>
            </C.Item>
          ))}
      </C.Grid>
    </C.Container>
  )
}
