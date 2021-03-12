import styled from "styled-components";
import { XSolarLogoSmall, SignInInfoImage } from "assets";

const Wrapper = styled.div`
  user-select: none;
  display: grid;
  width: 100%;
  height: 100%;
  // grid-template-columns: 40% 60%;
  grid-template-columns: calc(41% + 10px) calc(59% - 10px);
  margin: auto;
  color: white;

  @media (max-width: 968px) {
    grid-template-columns: 100%;
  }
`;

const LoadingWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const InfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-image: url(${SignInInfoImage});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  @media (max-width: 968px) {
    display: none;
  }
`;

const Logo = styled(XSolarLogoSmall)`
  position: absolute;
  top: 50px;
  left: 50px;

  g g {
    fill: #309b42 !important;
  }
`;

const ImageGradient = styled.div`
    background-image: linear-gradient(to bottom, rgba(66, 83, 98, 0), rgba(56, 71, 85, 0.72) 40%, rgba(56, 71, 85, 0.73) 43%, #1f2933);
    height: 40%;
    width: 100%
    position: absolute;
    bottom: 0;
    opacity: 0.7;
`;

const LogoText = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  padding: 20px 40px;
  margin: 0;
  z-index: 1;
`;

const LogoTextName = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  padding: 0px 40px;
  text-transform: capitalize;
  letter-spacing: 2px;
  z-index: 1;
  margin-bottom: 40px;
  width: calc();
`;

const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px;
  justify-content: center;
  width: 100%;
  max-width: 656px;
  height: 100%;
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.heading.latoHeading};
  font-size: 32px;
  line-height: 48px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #1f2933;
  margin: 0;
  margin-bottom: 8px;
  font-weight: 500;
`;

const TitleInfo = styled.p`
  font-family: ${(props) => props.theme.paragraph.latoPara};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 26px;
  letter-spacing: normal;
  color: ${(props) => props.theme.grey};
  margin: 0;
`;

const AccountError = styled.div`
  margin-top: 16px;
  background-color: rgba(213, 51, 85, 0.1);
  border-left: 5px solid #d53355;
  color: #d53355;
  padding: 5px 10px;
  border-radius: 3px;

  ::first-letter {
    text-transform: capitalize;
  }
`;

const PasswordWrapper = styled.div`
  margin-top: 32px;
  width: 100%;
`;

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 690px;
  // zoom: 80%;
`;

const TopBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  width: ${(props) => {
    if (props.isAuthenticated) {
      return props.sidebarCollapsed
        ? "calc(100% - 80px)"
        : "calc(100% - 224px)";
    }
    return "100%";
  }};
`;

const TableWrapper = styled.div`
  height: calc(100% - 215px);
  width: calc(100% - 64px);
  margin-left: 32px;
  margin-top: 30px;
`;

const Form = styled.form`
  margin-top: ${(props) => props.marginTop};
`;

const RowWrapper = styled.div`
  display: flex;
`;

const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const MarginLeft = styled.div`
  margin-left: 16px;
  margin-bottom: 10px;
  align-self: flex-end;
`;

const RightAlign = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.2);
`;

const MarginTop = styled.span`
  margin-top: ${(props) => props?.marginTop || "32px"};
`;

const NoDataWrapper = styled.div`
  width: 100% !important;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgb(31 41 51 / 10%);
`;

export {
  Wrapper,
  LoadingWrapper,
  InfoContainer,
  Logo,
  LogoText,
  MainInfoWrapper,
  MainInfoContainer,
  Title,
  TitleInfo,
  AccountError,
  PasswordWrapper,
  MainWrapper,
  TopBarWrapper,
  LogoTextName,
  ImageGradient,
  TableWrapper,
  Form,
  RowWrapper,
  ColWrapper,
  MarginLeft,
  RightAlign,
  LoadingContainer,
  MarginTop,
  NoDataWrapper,
};
