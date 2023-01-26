import React, { useMemo } from "react";
import "./MenuLinks.style.scss";
import { NavLink } from "react-router-dom";
import { MenuLinkType } from "./MenuLinks.types";

type PropsType = {};

const MenuLinks: React.FC<PropsType> = (props) => {
  const options = {
    menuItems: useMemo<MenuLinkType[]>(
      () => [
        { key: 1, title: "Просмотр", link: "/" },
        { key: 2, title: "Управление", link: "/control" },
      ],
      []
    ),
  };

  return (
    <ul className="menu">
      {options.menuItems.map((item) => (
        <li className={"menu-link"}>
          <NavLink to={item.link}>{item.title}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(MenuLinks) as typeof MenuLinks;
