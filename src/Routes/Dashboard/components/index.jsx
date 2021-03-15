import React from "react";
import {
  DashboardMainWrapper,
  DashboardWrapper,
  MainContainerWrapper,
  Image,
  Stepper,
  EachStep,
  MarginTop,
  SignInButtonContainer,
  Loader,
  LoadingContainer,
} from "./index.styled.components";
import { LogoIcon } from 'assets';
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";
import FourthStep from "./fourthStep";
import OrderCompleted from "./orderCompleted";
import { useHistory } from "react-router-dom";
import { DashboardContext } from "../dashboard.context";
const HomePage = () => {
  const {
    loading,
    step, setStep,
  } = React.useContext(DashboardContext)
  const [currentWidth, setCurrentWidth] = React.useState(window.innerWidth);

  const { push } = useHistory();

  React.useEffect(() => {
    window.addEventListener("resize", reportWindowSize);
  }, []);

  const reportWindowSize = () => {
    setCurrentWidth(window.innerWidth);
  };

  const stepComponents = {
    "0": <FirstStep setStep={setStep} />,
    "1": <SecondStep setStep={setStep} />,
    "2": <ThirdStep setStep={setStep} />,
    "3": <FourthStep setStep={setStep} />,
    "4": <OrderCompleted setStep={setStep} />,
  }

  const handleSignIn = () => {
    push("/signin");
  }

  return (
    <DashboardMainWrapper>
      {
        loading && (
          <LoadingContainer>
            <Loader />
          </LoadingContainer>
        )
      }
      <DashboardWrapper>
        <MainContainerWrapper loading={loading}>
          <SignInButtonContainer onClick={handleSignIn}> Admin Login </SignInButtonContainer>
          <Image src={LogoIcon} />
          <MarginTop marginTop={16}>
            <Stepper current={step} direction={currentWidth > 796 ? "horizontal" : "vertical"}>
              <EachStep title="Valiste myymälä" />
              <EachStep title="Toimitusosoite" />
              <EachStep title="Valiste toimitusaika" />
              <EachStep title="Tuotteet" />
            </Stepper>
          </MarginTop>
          <MarginTop marginTop={step === 2 ? 8 : 32}>
            {stepComponents[step]}
          </MarginTop>
        </MainContainerWrapper>

      </DashboardWrapper>
    </DashboardMainWrapper>
  );
};

export default HomePage;
