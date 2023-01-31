import React, { MouseEvent } from "react";
import { Outlet } from "react-router-dom";
import { navItems } from "../../pages/OutlaysPage/OutlaysPage.service";
import { CustomLink } from "../CustomLink";
import "./Outlays.style.scss";

type PropsType = {
  onOutlays: (e: MouseEvent<HTMLLIElement>) => void;
  title: string;
};

const Outlays: React.FC<PropsType> = (props) => {
  return (
    <section className="outlays">
      <div className="navbar">
        <div className="navbar__head">
          Название проекта
          <span className="project-name">Аббревиатура</span>
        </div>
        <ul className="navbar__list">
          {navItems.map((item) => (
            <li
              onClick={props.onOutlays}
              data-eid={item.eID}
              data-title={item.title}
              key={item.key}
              className="navbar__item"
            >
              <CustomLink to={item.link}>{item.short}</CustomLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="outlays-content">
        <div className="outlays-content__title">
          {props.title && <span>{props.title}</span>}
        </div>
        <div className="outlays-content__table">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Outlays) as typeof Outlays;
