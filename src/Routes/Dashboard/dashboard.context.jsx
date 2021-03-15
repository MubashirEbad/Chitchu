import React from "react";

const DashboardContext = React.createContext({});

const DashboardContextProvider = ({ children }) => {
  const [city, setCity] = React.useState(null);
  const [store, setStore] = React.useState(null);
  const [currentAddress, setCurrentAddress] = React.useState("");
  const [time, setTime] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [otherInfo, setOtherInfo] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [building, setBuilding] = React.useState("");
  const [file, setFile] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    submitForm();
  }, [])

  const submitForm = () => {
    // setLoading(true);
    if (window.Email) {
      const secureToken = "b068284f-b426-4d6a-8ffb-b5bd894bbfa0";
      const emailBody = `
      Sender: Mubashir\n
      Email: Somethingggg\n
      Message: Email Body
      `
      window.Email.send({
        SecureToken: secureToken,
        // Host: "smtp.gmail.com",
        // Username: "nopeaKettu1@gmail.com",
        // Password: "Emirates/123",
        To: 'mubashir.ebad@gmail.com',
        From: 'nopeaKettu1@gmail.com',
        Subject: "New Order",
        Body: emailBody,
      })
        .then(() => alert("Order Submitted"))
        .catch(err => alert("Order Could Not Be Submitted"))
    }
  }

  return (
    <DashboardContext.Provider
      value={{
        time, setTime,
        city, setCity,
        name, setName,
        file, setFile,
        phone, setPhone,
        store, setStore,
        loading, setLoading,
        building, setBuilding,
        otherInfo, setOtherInfo,
        description, setDescription,
        currentAddress, setCurrentAddress,

      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
