import React, { useMemo } from "react";
import "./MenuLinks.style.scss";
import { MenuLinkType } from "./MenuLinks.types";
import { CustomLink } from "../CustomLink";

type PropsType = {};

const MenuLinks: React.FC<PropsType> = (props) => {
  const options = {
    menuItems: useMemo<MenuLinkType[]>(
      () => [
        { key: 1, title: "Просмотр", link: "/view" },
        { key: 2, title: "Управление", link: "/control" },
      ],
      []
    ),
  };

  return (
    <ul className="menu">
      {options.menuItems.map((item) => (
        <li key={item.key} className={"menu__link"}>
          <CustomLink to={item.link}>{item.title}</CustomLink>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(MenuLinks) as typeof MenuLinks;
