import React from "react";

import {
  Wrapper,
  InfoContainer,
  Logo,
  LogoText,
  MainInfoWrapper,
  LogoTextName,
  ImageGradient,
} from "Routes/app.styled.components";
import { withRouter } from "react-router-dom";
import SignIn from "./signIn";

const SignInComponent = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  return (
    <Wrapper>
      <InfoContainer>
        <Logo />
        <LogoText>
          “Providing you with the best service”
        </LogoText>
        <LogoTextName> Anonymous </LogoTextName>
        <ImageGradient />
      </InfoContainer>
      <MainInfoWrapper>
        <SignIn
          email={email}
          checked={checked}
          password={password}
          setEmail={setEmail}
          setChecked={setChecked}
          setPassword={setPassword}
        />
      </MainInfoWrapper>
    </Wrapper>
  );
};

export default withRouter(SignInComponent);
