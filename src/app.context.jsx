import React from "react";

const AppContext = React.createContext({});

const AppContextProvider = ({ children }) => {

  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
