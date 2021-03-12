import React from "react";
import styled from "styled-components";
import Field from "@material-ui/core/TextField";

const TextField = styled(Field)`
    width: 100%;
    margin-top: ${(props) => props.marginTop};
    div {
      height: 116px !important;
    }
    div textarea {
      height: 100% !important;
    }
    div input {
        text-transform: ${(props) =>
          props.textfieldType === "code" && "uppercase !important"}
        letter-spacing: ${(props) =>
          props.textfieldType === "code" && "5px !important"};
    }
`;

const OutlinedTextField = (props) => {
  const {
    value,
    rows = 3,
    required = false,
    type = null,
    error,
    id = "standard-textfields",
    label = "Enter Something",
    placeholder = "eg: john@xsolarsystems.com",
    onChange: setText,
    marginTop = "40px !important",
    height = "116px",
    disabled = false,
  } = props;
  return (
    <TextField
      value={value}
      required={required}
      multiline
      rows={rows}
      textfieldType={type}
      error={error}
      id={id}
      label={label}
      disabled={disabled}
      placeholder={placeholder}
      variant="outlined"
      marginTop={marginTop}
      onChange={(event) => {
        const textValue = event.target.value;
        if (setText && textValue.length < 1000) setText(textValue);
        // if (setText) setText(event.target.value);
      }}
      InputLabelProps={{ shrink: true }}
    />
  );
};

export default OutlinedTextField;
