import styled from "styled-components";
import Form from "@material-ui/core/FormControl";

export const FormControl = styled(Form)`
  width: ${(props) => props.width} !important;
  // div {
  //     height: ${(props) => props.height} !important;
  // }

  .MuiInputLabel-shrink {
    padding-right: 7px !important;
  }

  .Mui-focused {
    div fieldset legend {
      width: 7px !important;
    }
  }
`;
