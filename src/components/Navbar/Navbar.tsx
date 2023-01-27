import React, { useMemo } from "react";
import "./MenuLinks.style.scss";
import { NavLink } from "react-router-dom";
import { MenuLinkType } from "./Navbar.types";

type PropsType = {};

const Navbar: React.FC<PropsType> = (props) => {
  const options = {
    navItems: useMemo<MenuLinkType[]>(
      () => [
        { key: 1, title: "Просмотр", link: "/" },
        { key: 2, title: "Управление", link: "/control" },
      ],
      []
    ),
  };

  return (
    <ul className="menu">
      {options.navItems.map((item) => (
        <li className={"menu-link"}>
          <NavLink to={item.link}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(Navbar) as typeof Navbar;
