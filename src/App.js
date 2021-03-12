import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import "antd/dist/antd.css";
import "react-phone-input-2/lib/material.css";
import { themeConfig } from "utils/utility.data";
import { ThemeProvider } from "styled-components";

const App = () => {
  const [theme, setTheme] = React.useState(themeConfig);
  return (

    <ThemeProvider theme={{ ...theme, setTheme }}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
