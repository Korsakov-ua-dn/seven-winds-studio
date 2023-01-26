import React from "react";
import { Link } from "react-router-dom";
import "./GoBackLink.style.scss";

type PropsType = {};

const GoBackLink: React.FC<PropsType> = (props) => {
  return (
    <Link className="go-back-link" to={"#"} />
  );
};

export default React.memo(GoBackLink) as typeof GoBackLink;
