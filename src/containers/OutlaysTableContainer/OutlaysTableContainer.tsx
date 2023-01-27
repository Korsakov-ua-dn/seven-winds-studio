import React from "react";

type PropsType = {};

const OutlaysTableContainer: React.FC<PropsType> = (props) => {
  return (
   <h1>OutlaysTableContainer</h1>
  );
};

export default React.memo(OutlaysTableContainer) as typeof OutlaysTableContainer;
