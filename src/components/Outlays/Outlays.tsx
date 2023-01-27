import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { CustomLink } from "../CustomLink";
import "./Outlays.style.scss";

const Outlays: React.FC = () => {
  const options = {
    navItems: useMemo(
      () => [
        { key: 1, short: "По проекту", title: "По проекту", link: "by-project" },
        { key: 2, short: "Объекты", title: "Объекты", link: "objects" },
        { key: 3, short: "РД", title: "РД", link: "rd" },
        { key: 4, short: "МТО", title: "МТО", link: "mts" },
        { key: 5, short: "СМР", title: "Строительно-монтажные работы", link: "smr" },
        { key: 7, short: "График", title: "График", link: "schedule" },
        { key: 8, short: "МиМ", title: "МиМ", link: "mim" },
        { key: 9, short: "Рабочие", title: "Рабочие", link: "workers" },
        { key: 10, short: "Капвложения", title: "Капвложения", link: "capital-investments" },
        { key: 11, short: "Бюджет", title: "Бюджет", link: "budget" },
        { key: 12, short: "Финансирование", title: "Финансирование", link: "financing" },
        { key: 13, short: "Панорамы", title: "Панорамы", link: "panoramas" },
        { key: 14, short: "Камеры", title: "Камеры", link: "cameras" },
        { key: 15, short: "Поручения", title: "Поручения", link: "orders" },
        { key: 16, short: "Контрагенты", title: "Контрагенты", link: "counterparties" },
      ], 
      []
    ),
  };

  return (
    <section className="outlays">
      <div className="navbar">
        <div className="navbar__head">
          Название проекта
          <span className="project-name">Аббревиатура</span>
        </div>
        <ul className="navbar__list">
          {options.navItems.map((item) => (
            <li onClick={() => { console.log(item.link) } } key={item.key} className="navbar__item">
              <CustomLink to={item.link}>{item.short}</CustomLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="outlays-content">
        <div className="outlays-content__title">
          <span>Строительно-монтажные работы</span>
        </div>
        <div className="outlays-content__table">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Outlays) as typeof Outlays;
