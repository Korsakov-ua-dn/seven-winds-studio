import React from "react";
import { Outlays } from "../../components/Outlays";

type PropsType = {};

const OutlaysPage: React.FC<PropsType> = (props) => {
  return <Outlays/>
};

export default React.memo(OutlaysPage) as typeof OutlaysPage;
