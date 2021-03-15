import React from "react";
import styled from "styled-components";
import Field from "@material-ui/core/TextField";

const TextField = styled(Field)`
    width: 100%;
    height: 56px;
    margin-top: ${(props) => props.marginTop};
    div input {
        text-transform: ${(props) =>
    props.textfieldType === "code" && "uppercase !important"}
        letter-spacing: ${(props) =>
    props.textfieldType === "code" && "5px !important"};
    }
`;

const OutlinedTextField = (props) => {
  const {
    disabled = false,
    value,
    required = false,
    type = null,
    error,
    id = "standard-textfields",
    label = "Enter Something",
    placeholder = "eg: john@xsolarsystems.com",
    onChange: setText,
    marginTop = "40px !important",
    textfieldType = null,
    handleOnFocus = () => { }
  } = props;
  return (
    <TextField
      autoComplete="off"
      disabled={disabled}
      type={textfieldType || "text"}
      required={required}
      textfieldType={type}
      error={error}
      id={id}
      value={value}
      label={label}
      placeholder={placeholder}
      variant="outlined"
      marginTop={marginTop}
      onFocus={handleOnFocus}
      onChange={(event) => {
        const textValue = event.target.value;
        // if (setText && textValue.length < 41) {
        //   console.log(textValue.length);
        //   setText(textValue);
        // };
        if (setText) setText(textValue.substr(0, 40));
      }}
      InputLabelProps={{ shrink: true }}
    />
  );
};

export default OutlinedTextField;
