import React from "react";
import { List } from "antd";

const DashboardContext = React.createContext({});

const DashboardContextProvider = ({ children }) => {
  const [city, setCity] = React.useState(null);
  const [store, setStore] = React.useState(null);
  const [currentAddress, setCurrentAddress] = React.useState("");
  const [time, setTime] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [otherInfo, setOtherInfo] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [building, setBuilding] = React.useState("");
  const [file, setFile] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [step, setStep] = React.useState(0);
  const [inputText, setInputText] = React.useState("");

  React.useEffect(() => {
    // submitForm();
  }, [])

  const submitForm = () => {
    setLoading(true);
    const emailBody = `
      City: ${city}\n<br>
      Store name: ${store || "----"}\n<br>
      Address: ${currentAddress.location}\n<br>
      Building: ${building || "----"}\n<br>
      Delivery Time: ${time && time.value || "----"}\n<br>
      Description: ${description || "----"}\n<br>
      Other Info: ${otherInfo || "----"}\n<br>
      Name: ${name || "----"}\n<br>
      Phone: ${phone || "----"}\n<br>
      `
    if (window.Email) {
      const emailConfig = {
        Host: "smtp.gmail.com",
        Username: "nopeaKettu1@gmail.com",
        Password: "mdecqghrkxqkmmps",
        To: 'mubashir.ebad@gmail.com',
        From: 'nopeaKettu1@gmail.com',
        Subject: "New Order",
        Body: emailBody,
      }

      if (file) {
        toBase64(file)
          .then(res => {
            console.log(res);
            emailConfig["Attachments"] = [{
              name: "list",
              data: res
            }]
          })
          .catch(err => {
            console.log(err);

          })
          .finally(() => {

            window.Email.send(emailConfig)
              .then(() => {
                alert("Order Submitted");
                setLoading(false);
                setStep(4);
              })
              .catch(err => {
                alert("Order Could Not Be Submitted");
              })
          })
      } else {
        window.Email.send(emailConfig)
          .then(() => {
            alert("Order Submitted");
            setLoading(false);
            setStep(4);
          })
          .catch(err => {
            alert("Order Could Not Be Submitted");
          })
      }
    }
  }

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  console.log(store);

  return (
    <DashboardContext.Provider
      value={{
        step, setStep,
        time, setTime,
        city, setCity,
        name, setName,
        file, setFile,
        phone, setPhone,
        store, setStore,
        loading, setLoading,
        building, setBuilding,
        otherInfo, setOtherInfo,
        inputText, setInputText,
        description, setDescription,
        currentAddress, setCurrentAddress,

        submitForm

      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export { DashboardContext, DashboardContextProvider };
