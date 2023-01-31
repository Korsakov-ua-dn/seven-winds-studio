import React from "react";
import { Table } from "../../components/Table";
import { useAppSelector } from "../../hooks";
import { viewDataScheme } from "./OutlaysTableContainer.services";

type PropsType = {};

const OutlaysTableContainer: React.FC<PropsType> = (props) => {
  const select = useAppSelector((state) => ({
    title: state.outlays.title,
    data: state.outlays.data,
    loading: state.outlays.loading,
    error: state.outlays.error,
  }));

  return (
    <>
      {select.loading && "Загрузка информации..."}

      {select.error && select.error}

      {!!select.data.length && <Table data={select.data} viewDataScheme={viewDataScheme} />}
    </>
  );
};

export default React.memo(
  OutlaysTableContainer
) as typeof OutlaysTableContainer;
