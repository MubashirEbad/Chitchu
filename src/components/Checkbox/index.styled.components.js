import styled from "styled-components";

export const CheckBox = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.isActive ? props.theme.backgroundColor : props.theme.lightGrey};
  background-color: ${(props) =>
    props.isActive ? props.theme.backgroundColor : "transparent"};
`;

export const WhiteCircle = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: white;
  top: 5px;
  left: 5px;
`;
