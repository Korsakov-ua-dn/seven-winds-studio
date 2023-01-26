import React from "react";
import { GoBackLink } from "../GoBackLink";
import { MenuButton } from "../MenuButton";
import { MenuLinks } from "../MenuLinks";
import "./Header.style.scss";

type PropsType = {};

const Header: React.FC<PropsType> = (props) => {
  return (
    <header className="header">
      <MenuButton />
      <GoBackLink />
      <MenuLinks />
    </header>
  );
};

export default React.memo(Header) as typeof Header;
