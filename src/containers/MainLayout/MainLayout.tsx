import React from "react";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";

type PropsType = {
  children: React.ReactElement
};

const MainLayout: React.FC<PropsType> = (props) => {
  return (
    <Layout>
        <Header />
        { props.children }
    </Layout>
  );
};

export default React.memo(MainLayout);
