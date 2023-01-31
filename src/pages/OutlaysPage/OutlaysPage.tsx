import React, { useCallback, MouseEvent, useEffect } from "react";
import { Outlays } from "../../components/Outlays";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { OutlaySlice } from "../../store/OutlaySlice";

type PropsType = {};

const OutlaysPage: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    title: state.outlays.title,
  }));

  const callbacks = {
    onOutlays: useCallback((e: MouseEvent<HTMLLIElement>) => {
      const eID = Number(e.currentTarget.getAttribute("data-eid"));
      const title = e.currentTarget.getAttribute("data-title") as string;
      dispatch(OutlaySlice.fetchOutlaysByEid({eID, title}))
    }, [dispatch]),
  };

  useEffect(() => {
    return () => { dispatch(OutlaySlice.actions.resetState()) }
  }, [dispatch]);

  return <Outlays onOutlays={callbacks.onOutlays} title={select.title}/>
};

export default React.memo(OutlaysPage) as typeof OutlaysPage;
