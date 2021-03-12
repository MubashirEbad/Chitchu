import styled from "styled-components";
import Steps from 'antd/lib/steps';
import Dropdown from "antd/lib/dropdown";
import { TickIcon } from 'assets';

const { Step } = Steps;

const DashboardMainWrapper = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.lightenGrey};
  overflow: auto;
  z-index: 1;
  padding-bottom: 20px;
  user-select: none;
  background-color: #f7f7f7;
`;

const DashboardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 64px);
  margin-left: 32px;
  margin-top: 24px;
  height: calc(100% - 24px);
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
  overflow: auto;
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
  height: 200px;
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
  width: 82px;
  padding: 0 14px;
  background-color: #8080802b;
  right: 32px;
  font-size: 16px;
  border-radius: 8px;
  padding-top: 6px;
  font-weight: 600;
  font-family: 'lato';
  cursor: pointer;
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
  SignInButtonContainer,
};
