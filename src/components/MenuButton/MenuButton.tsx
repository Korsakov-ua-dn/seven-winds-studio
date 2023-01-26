import React from "react";
import "./MenuButton.style.scss";

type PropsType = {};

const MenuButton: React.FC<PropsType> = (props) => {
  return (
    <button className="menu-button"></button>
  );
};

export default React.memo(MenuButton) as typeof MenuButton;
