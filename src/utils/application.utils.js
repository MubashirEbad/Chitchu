import React from "react";
import { errorMessages, allTranslations } from "utils/utility.data";
// import { openNotification } from "components/CustomNotification";

const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
export const verifyEmail = (email) => {
  return emailRegex.test(email.toLowerCase());
};

export const verifyDomainEmail = (email) => {
  // return xSolarEmailRegex.test(email.toLowerCase());
  return true;
};

export const emailVerification = (email) => {
  const errorText =
    email === ""
      ? errorMessages.emailEmpty
      : verifyEmail(email)
        ? verifyDomainEmail(email)
          ? ""
          : errorMessages.domainEmail
        : errorMessages.invalidEmail;
  return errorText;
};

export const InitialCapitalize = (value, typeCase) => {
  let data = "";
  if (value) {
    if (typeCase) {
      if (typeCase === "capitlize") {
        data = value.toUpperCase();
      } else if (typeCase === "lowercase") {
        data = value.toLowerCase();
      } else if (typeCase === "capitalize") {
        data = value
          .split(" ")
          .map((item) => {
            return `${item.substr(0, 1).toUpperCase()}${item
              .substr(1)
              .toLowerCase()}`;
          })
          .join(" ");
      } else {
        data = `${value.substr(0, 1).toUpperCase()}${value.substr(1)}`;
      }
    } else {
      data = `${value.charAt(0).toUpperCase()}${value.substr(1)}`;
    }
  }
  return data;
};

export const getGreetingsText = () => {
  const {
    goodMorning,
    goodAfternoon,
    goodEvening,
    goodNight,
  } = allTranslations;
  const time = new Date().getHours();
  const timeText =
    time < 12
      ? goodMorning
      : time < 17
        ? goodAfternoon
        : time < 20
          ? goodEvening
          : goodNight;
  return timeText;
};

export const showNotification = (title, type, duration, description) => {
  // openNotification({
  //   title,
  //   type,
  //   duration,
  //   description,
  // });
};

export const citiesList = [
  {
    value: "Poorvo",
    label: "Poorvo",
  },
  {
    value: "Vanta",
    label: "Vanta (Coming Soon)",
  },
  {
    value: "Espoo",
    label: "Espoo (Coming Soon)",
  },
]
export const storesList = [
  {
    value: "Lidl Näsi",
    label: "Lidl Näsi",
  },
  {
    value: "S-Market Näsi",
    label: "S-Market Näsi",
  },
  {
    value: "K-SuperMarket Tarmola",
    label: "K-SuperMarket Tarmola",
  },
  {
    value: "K-CityMarket Porvoo",
    label: "K-CityMarket Porvoo",
  },
  {
    value: "Shell Kuninkaanportti 24/7",
    label: "Shell Kuninkaanportti 24/7",
  },
  {
    value: "Tokmanni Porvoo",
    label: "Tokmanni Porvoo",
  },
  {
    value: "K-Rauta Porvoo",
    label: "K-Rauta Porvoo",
  },
  {
    value: "Rusta Porvoo",
    label: "Rusta Porvoo",
  },
  {
    value: "Motonet Porvoo",
    label: "Motonet Porvoo",
  },
  {
    value: "Gigantti Porvoo",
    label: "Gigantti Porvoo",
  },
  {
    value: "Power Porvoo",
    label: "Power Porvoo",
  },
  {
    value: "Sokos Porvoo",
    label: "Sokos Porvoo",
  },
  {
    value: "Clas-ohlson Porvoo",
    label: "Clas-ohlson Porvoo",
  },
]

export const timeIntervalsList = [
  {
    value: "HETI",
    label: "HETI",
  },
  {
    value: "12-14",
    label: "12-14",
  },
  {
    value: "16-18",
    label: "16-18",
  },
  {
    value: "18-20",
    label: "18-20",
  },
  {
    value: "20-22",
    label: "20-22",
  },
  {
    value: "22-24",
    label: "22-24",
  }
]