import styled from "styled-components";
import Steps from 'antd/lib/steps';
import Dropdown from "antd/lib/dropdown";
import { TickIcon } from 'assets';
import Menu from "antd/lib/menu";
import Spin from "antd/lib/spin"

const { Step } = Steps;

const DashboardMainWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.lightenGrey};
  overflow: auto;
  z-index: 1;
  padding-bottom: 20px;
  user-select: none;
  background-color: #f7f7f7;
  @media(max-width: 600px) {
    padding-bottom: 0;
  }
`;

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 64px);
  margin-left: 32px;
  margin-top: 24px;
  height: calc(100% - 24px);

  @media(max-width: 600px) {
    margin: 0;
    height: 100%;
    width: 100%;
  }
`;

const MainContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  height: 100%;
  padding: 32px;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  overflow: ${props => !props.loading && "auto"};
  box-shadow: 0 0 10px 0 rgb(31 41 51 / 10%);
  position: relative;
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between
  height: 60px;
  width: 100%;
`;

const Title = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 24px;
  line-height: 36px;
  color: #1f2933;
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
`;

const Image = styled.img`
  width: 20rem;
  @media(max-width: 900px) {
    width: 45%;
  }
`;

const Stepper = styled(Steps)``;

const EachStep = styled(Step)`

`;

const MarginTop = styled.div`
  position: relative;
  margin-top: ${props => props.marginTop}px;
  width: 100%;
`;

const MarginLeft = styled.div`
  margin-left: ${props => props.marginLeft}px;
`;

const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CenterAlign = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  min-height: 200px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  box-shadow: 0 0 10px 0 rgb(31 41 51 / 33%);
  border-radius: 6px;
  background-color: white;
`;

const EachRow = styled.div`
  display: flex;
  width: 100%;
  height: 36px;
`;

const DropDownItem = styled(Dropdown)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const HintText = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 14px;
  line-height: 14px;
  color: #c78383;
  margin: 0;
`;

const TextTitle = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  color: #309b42;
  margin: 0;
`;

const TextDescription = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 24px;
  text-align: center;
  color: #309b42;
  margin: 0;
`;

const CircleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 30px;
  background-color: #309b4240
  margin-top: 32px;
`;

const SuccessIcon = styled(TickIcon)`
  height: 48px !important;
  width: 48px !important;
`;

const SignInButtonContainer = styled.div`
  position: absolute;
  height: 40px;
  padding: 0 14px;
  background-color: #8080802b;
  right: 32px;
  font-size: 16px;
  border-radius: 8px;
  padding-top: 6px;
  font-weight: 600;
  font-family: 'lato';
  cursor: pointer;

  @media(max-width: 480px) {
    height: 34px;
    padding: 0 8px;
    right: 8px;
    font-size: 14px;
    padding-top: 4px;
  }
`;

const SearchFieldContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
`;

const OptionsMenu = styled(Menu)`
  box-shadow: 1px 10px 10px 2px rgba(31, 41, 51, 0.1) !important;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 100% !important;
  height: 212px !important;
  padding: 16px 0 !important;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: auto;
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  padding: 0 12px;
  box-shadow: none;
  border-radius: 4px;
  border: 1px solid #939393;
`;

const ErrorMessage = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 16px;
  color: #c78383;
  margin: 0;
  font-weight: bold;
`;

const TimesContainer = styled.div`
  widht: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 32px;

  @media(max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const EachTime = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 60px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  padding: 0 16px 0 10px;
  background-image: ${props => props.first ? "linear-gradient(225deg,#fe563b,#d8214d)" : "linear-gradient(225deg,#096dd9,#1890ff)"};
  color: #fff!important;
  justify-content: center;
  font-weight: bold;
  justify-self: center;
  cursor: pointer;
  text-align: center;
  box-shadow: ${props => props.selected && "rgb(31 41 51) 0px 0px 10px 0px"};

  @media(max-width: 600px) {
    :nth-child(even) {
      margin-top: 32px;
    }
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10001;
`;

const Loader = styled(Spin)``;

const SubTitle = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 14px;
  color: #1f2933;
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
`;

const SubTitleText = styled.a`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 13px;
  color: #40a9ff;
  margin: 0;
  font-weight: bold;
  text-transform: capitalize;
`;

export {
  DashboardMainWrapper,
  DashboardWrapper,
  MainContainerWrapper,
  Title,
  Image,
  Stepper,
  MarginTop,
  EachStep,
  RightAlign,
  MarginLeft,
  Container,
  EachRow,
  InfoContainer,
  DropDownItem,
  HintText,
  TextTitle,
  TextDescription,
  CenterAlign,
  Circle,
  SuccessIcon,
  CircleContainer,
  OptionsMenu,
  SearchFieldContainer,
  SignInButtonContainer,
  MainContainer,
  InputField,
  ErrorMessage,
  TimesContainer,
  EachTime,
  Loader,
  LoadingContainer,
  SubTitle,
  SubTitleText
};
