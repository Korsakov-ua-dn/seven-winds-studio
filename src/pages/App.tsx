import React from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../containers/MainLayout";
import { OutlaysTableContainer } from "../containers/OutlaysTableContainer";
import { OutlaysPage } from "./OutlaysPage";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={"/view"} element={<OutlaysPage />}>
          <Route path={"smr"} element={<OutlaysTableContainer />} />
          <Route
            path={"*"}
            element={<h1 style={{ padding: "20px" }}>Отсутствует контент</h1>}
          />
        </Route>
        <Route
          path={"/control"}
          element={<h1 style={{ padding: "20px" }}>Отсутствует контент</h1>}
        />
      </Routes>
    </MainLayout>
  );
};

export default React.memo(App);
