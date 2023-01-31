import React from "react";
import { OutlayRow } from "../../store/OutlaySlice/OutlaysSlice.types";
import { TableBody } from "./table-body";
import "./Table.style.scss";
import { Data } from "./Table.types";
import { TableHead } from "./TableHead";

type PropsType<T> = {
  data: T[];
  viewDataScheme: ViewDataScheme<T>;
};

export type ViewDataScheme<T> = Partial<Record<keyof T, Data>>;

const Table = <T extends object>(props: PropsType<T>) => {
  return (
    <div className="table">
      <table>
        <TableHead viewDataScheme={props.viewDataScheme} />
        <TableBody items={props.data} viewDataScheme={props.viewDataScheme} />
      </table>
    </div>
  );
};

export default React.memo(Table) as typeof Table;
