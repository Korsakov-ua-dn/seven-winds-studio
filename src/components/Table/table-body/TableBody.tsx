import React from "react";
import { v1 } from "uuid";
import { ViewDataScheme } from "../Table";
import { TableRow } from "../TableRow";

type PropsType<T> = {
  items: T[];
  viewDataScheme: ViewDataScheme<T>;
};

const TableBody = <T extends object>(props: PropsType<T>): JSX.Element => {
  const tbody = props.items.map((row, i) => {
    const id = v1();
    return (
      <TableRow key={id} row={row} viewDataScheme={props.viewDataScheme} />
    );
  });

  return <>{tbody}</>;
};

export default React.memo(TableBody) as typeof TableBody;
