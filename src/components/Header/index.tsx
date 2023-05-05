import React, { ChangeEvent, FormEvent, useState } from "react";
import { MagnifyingGlass, CaretDown, BellSimple } from "@phosphor-icons/react";
import ProfileImg from "../../assets/images/person.jpg";
import { useNavigate } from "react-router-dom";

import * as C from "./styles";

export const Header: React.FC = () => {
  const [searchChecklists, setSearchChecklists] = useState<string>("");
  const navigate = useNavigate();
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchChecklists !== "" && navigate(`/search/${searchChecklists}`);
  }
  
  const handleChangeChecklists = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchChecklists(event.target.value.replace(/\b\w/g, l => l.toUpperCase()));
  }

  return (
    <C.Container>
      <C.Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Procure pelo nome do teste"
          value={searchChecklists}
          onChange={handleChangeChecklists}
        />
        <button type="submit">
          <MagnifyingGlass size={20} />
        </button>
      </C.Form>

      <C.Info>
        <div>
          <img src={ProfileImg} alt="Profile" width={32} height={32} />
          <span>Vinicius</span>
          <CaretDown size={13} />
        </div>
        <BellSimple size={20} weight="fill" />
      </C.Info>
    </C.Container>
  );
};
