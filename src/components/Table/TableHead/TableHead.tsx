import React from "react";
import { ViewDataScheme } from "../Table";
import "./TableHead.style.scss";

type PropsType<T> = {
  viewDataScheme: ViewDataScheme<T>;
};

const TableHead = <T,>(props: PropsType<T>): JSX.Element => {

  let th = [<th className="table__head-item">Уровень</th>];

  for (let key in props.viewDataScheme) {
    const width = props.viewDataScheme[key]?.width;

    th.push(
      <th
        key={key}
        className="table__head-item"
        style={width ? { maxWidth: `${width}px`, minWidth: `${width}px` } : {}}
      >
        <div>
          {props.viewDataScheme[key]?.title}
        </div>
      </th>
    );
  }

  return <thead>
    <tr className="table__head-row">{th}</tr>
  </thead>;
};

export default React.memo(TableHead) as typeof TableHead;
