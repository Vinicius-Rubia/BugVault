import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import moment from "moment";

import { MagnifyingGlass } from "@phosphor-icons/react";

import { useSelector } from "react-redux";
import { selectChecklists } from "../../redux/checklistsSlice";
import { ChartBar } from "../../components/ChartBar";
import { ChartLineWeek } from "../../components/ChartLineWeek";
import { ChartLineMonth } from "../../components/ChartLineMonth";
import { ChartCircle } from "../../components/ChartCircle";

import * as C from "./styles";
import { fetchChecklists } from "../../services/checklistService";

export const Charts: React.FC = () => {
  const [dateStart, setDateStart] = useState<string>("");
  const [dateEnd, setDateEnd] = useState<string>("");
  const checklists = useSelector(selectChecklists);

  useEffect(() => {
    if (checklists.checklists.length === 0) {
      fetchChecklists();
    }
  }, [checklists.checklists]);

  const startDate = new Date(2023, 4, 0); // o segundo parâmetro é o índice do mês (0 = Janeiro)
  const endDate = new Date(2023, 4 + 1, 0); // 0 significa o último dia do mês

  // const formatedDate = checklists.checklists.map((checklists: any) => {
  //   const itemDate = moment(checklists.createdAt).format("YYYY-MM-DD");
  //   return itemDate;
  // });
  
  // const filteredData = formatedDate.filter((item: any) => {
  //   const itemDate = new Date(item);
  //   return itemDate >= startDate && itemDate <= endDate;
  // });

   const formatedData = checklists.checklists.map((checklists: any) => {
    const itemDate = moment(checklists.createdAt).format("YYYY-MM-DD");
    const result = checklists.result
    // const checklist = new Date(checklists.createdAt);
    return (new Date(itemDate) >= startDate && new Date(itemDate) <= endDate) && {itemDate, result};
    // const createdAt = checklists.createdAt 
    // return {itemDate, result};
    // return itemDate;
  });

  console.log(formatedData);

  // const filteredData = formatedData.filter((item: any) => {
  //   const itemDate = new Date(item);
  //   return itemDate >= startDate && itemDate <= endDate;
  // });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }

  const handleChangeDateStart = (event: ChangeEvent<HTMLInputElement>) => {
    setDateStart(event.target.value);
  }

  const handleChangeDateEnd = (event: ChangeEvent<HTMLInputElement>) => {
    setDateEnd(event.target.value);
  }


  return (
    <C.Container>
      <h1>Veja os resultados dos checklists em gráficos:</h1>

      <C.ChooseDate>
        <p>Escolha a data que quer ver os gráficos:</p>
        <C.DateForm onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Data de Início"
            value={dateStart}
            onChange={handleChangeDateStart}
          />
          <span>Até</span>
          <input
            type="text" 
            placeholder="Data de Término"
            value={dateEnd}
            onChange={handleChangeDateEnd}
          />
          <button type="submit">
            <MagnifyingGlass size={20} />
          </button>
        </C.DateForm>
      </C.ChooseDate>

      <C.Grid>
        <C.Graphic>
          <ChartBar />
        </C.Graphic>
        
        <C.Graphic>
          <ChartLineWeek />
        </C.Graphic>

        <C.Graphic>
          <ChartLineMonth />
        </C.Graphic>

        <C.Graphic>
          <ChartCircle />
        </C.Graphic>

      </C.Grid>
    </C.Container>
  );
};
