import React from "react";
import PhoneInput from "react-phone-input-2";
import "./index.css";

const PhoneField = (props) => {
  const { value, label, required, placeholder, handleChange, disabled } = props;
  return (
    <PhoneInput
      className="phone-field"
      country={"dk"}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(phone) => handleChange(phone)}
      inputProps={{
        name: label,
        required: { required },
        autoFocus: false,
      }}
    />
  );
};
export default PhoneField;
