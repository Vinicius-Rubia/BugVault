import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import { List, XCircle } from "@phosphor-icons/react";
import { Menu } from "./Menu";

import * as C from "./styles";

interface IProps {
  toogleTheme(): void;
}

export const SideBar: React.FC<IProps> = ({ toogleTheme }) => {
  const [menu, setMenu] = useState(false);
  const { colors, title } = useContext(ThemeContext);

  const handleToogleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    menu
      ? (window.document.body.style.overflow = "hidden")
      : (window.document.body.style.overflow = "auto");
  }, [menu]);

  return (
    <C.Container>
      <C.MenuMobile>
        {menu ? (
          <XCircle size={32} weight="fill" onClick={handleToogleMenu} />
        ) : (
          <List size={32} weight="fill" onClick={handleToogleMenu} />
        )}
        <Link to="/">
          <h2>BugVault</h2>
        </Link>
      </C.MenuMobile>

      <Menu showMenu={menu} />

      <C.ChangeTheme>
        <Switch
          onChange={toogleTheme}
          checked={title === "dark"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={55}
          handleDiameter={20}
          offColor={colors.gray}
          onColor={colors.green200}
        />
        <span>Modo Escuro</span>
      </C.ChangeTheme>
    </C.Container>
  );
};
