import React from "react";
import "./OutlaysHead.style.scss";

type PropsType = {};

const OutlaysHead: React.FC<PropsType> = (props) => {

  return (
    <div className="outlays-head">
      <div className="project-name">Название проекта</div>
      <div className="project-title">Строительно-монтажные работы</div>
    </div>
  );
};

export default React.memo(OutlaysHead) as typeof OutlaysHead;
