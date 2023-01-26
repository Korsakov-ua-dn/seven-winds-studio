import React, {
  useCallback,
  useLayoutEffect,
} from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const Outlays: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  
  const select = useAppSelector((state) => ({
    outlays: state.outlays.data,
    loading: state.outlays.loading,
    error: state.outlays.error,
  }));
  
  const callbacks = {
    // setLimit: useCallback((limit: number) => {
    //   dispatch(transactionActions.setLimit(limit))
    // }, [dispatch]),
    // setPage: useCallback((page: number) => {
    //   dispatch(transactionActions.setPage(page))
    // }, [dispatch]),
  };
  
  // useLayoutEffect(() => {
  //   dispatch(fetchAllTransactions())
  // }, [dispatch]);

  return (
    <>
      {select.loading && "Загрузка информации..."}

      {select.error && select.error}

      {/* {!!select.transactions.length && (
          <TableContainer
            items={select.transactions}
            limit={select.limit}
            page={select.page}
            viewDataFormatScheme={{
              name: { format: "string", title: "Транспорт", sort: true, renderFunction: formatDataToView["string"] },
              date: { format: "date", title: "Дата", sort: true, renderFunction: formatDataToView["date"] },
              card: { format: "string", title: "Карта", sort: false, renderFunction: formatDataToView["string"] },
              point: { format: "string", title: "АЗС", sort: false, renderFunction: formatDataToView["string"] },
              address: { format: "string", title: "Адрес", sort: true, renderFunction: formatDataToView["string"], width: 50 },
              fuelName: { format: "string", title: "Тип топлива", sort: false, renderFunction: formatDataToView["string"], width: 80 },
              fuelCount: { format: "number", title: "Количество", sort: true, renderFunction: formatDataToView["number"], width: 70 },
              coast: { format: "price", title: "Стоимость", sort: true, renderFunction: formatDataToView["price"] },
            }} // => тут типы проверяются
            // viewDataFormatScheme={viewDataScheme} // Если вынести объект схемы в переменную теряется проверка типизации
            colorScheme="zebra"
            locale={select.locale}
            setLimit={callbacks.setLimit}
            setPage={callbacks.setPage}
            expandingContentComponent={(info) => <ExpandingContent info={info} />}
          />
      )} */}
    </>
  );
});