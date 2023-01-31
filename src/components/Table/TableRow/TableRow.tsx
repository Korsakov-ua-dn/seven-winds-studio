import React from "react";
import { ViewDataScheme } from "../Table";
import "./TableRow.style.scss";

type PropsType<T> = {
  row: any;
  viewDataScheme: ViewDataScheme<T>
};

const TabelRow = <T extends object>(props: PropsType<T>): JSX.Element => {
  const rowIcon = require("../../../assets/images/RowIcon.svg").default;
  const trashFill = require("../../../assets/images/TrashFill.svg").default;
  let td = [
    <td
      className="table__body-item"
      key={"arrow"}
    >
      <div className={`${props.row.child.lenght ? "ul" : "li"}`}>
        <img className="row-icon" src={rowIcon} alt="row icon" />
        <img className="trash-fill" src={trashFill} alt="trash fill icon" />
      </div>
    </td>
  ];

  for (let key in props.viewDataScheme) {
    const width = props.viewDataScheme[key]?.width;

    td.push(
      <td
        key={key}
        className="table__body-item"
        style={width ? { maxWidth: `${width}px`, minWidth: `${width}px` } : {}}
      >
        {props.row[key]}
      </td>
    );
  }

  return (
    <tr className="table__body-row">{td}</tr>
  );
};

export default React.memo(TabelRow) as typeof TabelRow;
