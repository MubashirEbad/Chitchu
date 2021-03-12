import React from "react";
import DashboardView from "../components";
import { DashboardContextProvider } from "../dashboard.context";

const HomePageContainer = (props) => {
  return (
    <DashboardContextProvider>
      <DashboardView />
    </DashboardContextProvider>
  );
};

export default HomePageContainer;
