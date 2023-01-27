import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./CustomLink.style.scss";

type PropsType = {
  children: string;
  to: string;
};

const CustomLink: React.FC<PropsType> = (props) => {
  const location = useLocation();
  const regex = new RegExp(`${props.to}`, 'g' );
  const match = regex.test(location.pathname);

  const classN = `custom-link ${match ? "custom-link_active" : ""}`;
  return (
    <Link to={props.to} className={classN}>
      {props.children}
    </Link>
  );
};

export default React.memo(CustomLink) as typeof CustomLink;
