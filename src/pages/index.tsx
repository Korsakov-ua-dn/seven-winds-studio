import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../containers/MainLayout";
import { Outlays } from "./Outlays";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={""} element={<Outlays />} />
        <Route path={"/control"} element={<div>Отсутствует контент</div>} />
      </Routes>
    </MainLayout>
  );
};

export default React.memo(App);
