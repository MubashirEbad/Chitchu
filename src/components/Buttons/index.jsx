import React from "react";
import styled from "styled-components";
import { Loader, Button } from "./index.styled.component";
import AddIcon from "@material-ui/icons/Add";
import { InitialCapitalize } from "utils/application.utils";

const PrimaryButton = (props) => {
  const {
    label,
    disabled = false,
    loading,
    onClick: handleOnClick,
    icon = null,
    size = "large",
    marginTop = "0",
    padding = "0",
    textCase = "uppercase",
  } = props;

  const Icon = styled(icon || "div")`
    height: 20px;
    margin-left: 10px;
  `;
  let buttonText = InitialCapitalize(label.toLowerCase(), textCase);

  return (
    <Button
      onClick={handleOnClick}
      disabled={loading || disabled}
      size={size}
      marginTop={marginTop}
      padding={padding}
      textCase={textCase}
    >
      {buttonText} {loading && <Loader />} {Icon && <Icon />}
    </Button>
  );
};

export default PrimaryButton;
