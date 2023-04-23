import React, { useState, useEffect } from "react";
import { DateFormatter, publishedDateRelativeToNow } from "../../utils/Formatter";
import ClaroImg from "../../assets/images/claro.png";
import ElektroImg from "../../assets/images/elektro.png";
import NegocieImg from "../../assets/images/negocie.png";
import SkyImg from "../../assets/images/sky.png";
import { api } from "../../lib/axios";

import * as C from "./styles";

export const RecentTests: React.FC = () => {
  const [recentLastChecklists, setRecentLastChecklists] = useState([]);

  useEffect(() => {
    const fetchRecentLastChecklists = async () => {
      const response = await api.get("checklists", {
        params: {
          _sort: "createdAt",
          _order: 'desc',
          _limit: "4"
        }
      });

      setRecentLastChecklists(response.data);
    };

    fetchRecentLastChecklists();
  }, []);

  return (
    <C.Container>
      <h2>Checklists Recentes</h2>

      <C.Grid>
        {recentLastChecklists.length === 0 ? (
          <h3 style={{color: "#FFFFFF"}}>Carregando...</h3>
        ) : (
          recentLastChecklists.map((checklists: any) => (
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
                  &#x2022; {publishedDateRelativeToNow(checklists.createdAt)}{" "}
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
