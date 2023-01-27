import React from "react";
import "./OutlaysBody.style.scss";

type PropsType = {};

const OutlaysBody: React.FC<PropsType> = (props) => {

  return (
    <div className="outlays-body">
      <div className="navbar">Название проекта</div>
      <div className="table">Строительно-монтажные работы</div>
    </div>
  );
};

export default React.memo(OutlaysBody) as typeof OutlaysBody;
