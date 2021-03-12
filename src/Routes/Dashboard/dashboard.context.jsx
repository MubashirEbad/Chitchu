import React from "react";

const DashboardContext = React.createContext({});

const DashboardContextProvider = ({ children }) => {
  const [city, setCity] = React.useState(null);
  const [store, setStore] = React.useState(null);
  const [currentAddress, setCurrentAddress] = React.useState("");
  const [time, setTime] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  return (
    <DashboardContext.Provider
      value={{
        time, setTime,
        city, setCity,
        name, setName,
        phone, setPhone,
        store, setStore,
        description, setDescription,
        currentAddress, setCurrentAddress,

      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
