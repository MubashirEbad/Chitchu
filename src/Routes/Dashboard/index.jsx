import React from "react";
import Loadable from "react-loadable";
import LogoLoader from "components/Loader";

const HomePageComponent = Loadable({
  loader: () => import("./container"),
  loading: () => <LogoLoader />,
});

export default HomePageComponent;
