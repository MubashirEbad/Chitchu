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
} from "./index.styled.components";
import { LogoIcon } from 'assets';
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";
import FourthStep from "./fourthStep";
import OrderCompleted from "./orderCompleted";
import { useHistory } from "react-router-dom";
const HomePage = () => {
  const [step, setStep] = React.useState(0);
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
      <DashboardWrapper>
        <MainContainerWrapper>
          <SignInButtonContainer onClick={handleSignIn}> Sign In </SignInButtonContainer>
          <Image src={LogoIcon} />
          <MarginTop marginTop={16}>
            <Stepper current={step} direction={currentWidth > 796 ? "horizontal" : "vertical"}>
              <EachStep title="Select Store" />
              <EachStep title="Current Address" />
              <EachStep title="Delivery Time" />
              <EachStep title="Order Details" />
            </Stepper>
          </MarginTop>
          <MarginTop marginTop={48}>
            {stepComponents[step]}
          </MarginTop>
        </MainContainerWrapper>

      </DashboardWrapper>
    </DashboardMainWrapper>
  );
};

export default HomePage;
