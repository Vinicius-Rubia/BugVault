import React from "react";
import { MagnifyingGlass, CaretDown, BellSimple } from "@phosphor-icons/react";
import ProfileImg from "../../assets/images/person.jpg";

import * as C from "./styles";

export const Header: React.FC = () => {
  return (
    <C.Container>
      <C.Form>
        <input type="text" placeholder="O que procura?" />
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
