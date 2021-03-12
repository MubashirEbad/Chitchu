import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const TitleMoreInfo = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: ${(props) => props.theme.grey};
  margin: 0;
`;

const TryAgain = styled.span`
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
`;

const OtherInfo = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  align-items: center;
`;

const CheckBox = styled(Checkbox)`
  padding: 0px !important;
  color: ${(props) => props.theme.backgroundColor} !important;
`;

const RememberMe = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  color: #52606d;
  margin: 0;
  margin-left: 16px;
  margin-bottom: 4px;
  cursor: pointer;
`;

const ForgotPassword = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.44;
  letter-spacing: normal;
  margin: 0;
  margin-left: auto;
  color: ${(props) => props.theme.backgroundColor};
  cursor: pointer;
`;

// const BackArrow = styled(LeftArrowIcon)`
const BackArrow = styled(ArrowBackIcon)`
  margin-bottom: 20px;
  color: green !important;
  align-self: flex-start;
  cursor: pointer;
  padding: 0 10px;
  font-size: 60px !important;
  margin-left: -15px;
`;

export {
  OtherInfo,
  CheckBox,
  RememberMe,
  ForgotPassword,
  TitleMoreInfo,
  TryAgain,
  BackArrow,
};
