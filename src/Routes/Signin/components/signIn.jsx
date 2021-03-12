import React from "react";
import { AppContext } from "app.context";
import { useHistory } from "react-router-dom";
import {
  OtherInfo,
  CheckBox,
  RememberMe,
  ForgotPassword,
} from "./index.styled.component";
import {
  Form,
  Title,
  TitleInfo,
  AccountError,
  PasswordWrapper,
  MainInfoContainer,
  MarginTop,
} from "Routes/app.styled.components";
import PrimaryButton from "components/Buttons";
import PasswordField from "components/TextFields/Password";
import { emailVerification } from "utils/application.utils";
import { allTranslations, errorMessages } from "utils/utility.data";
import OutlineTextField from "components/TextFields/OutlinedTextField";

const SignIn = (props) => {
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { push } = useHistory();
  const {
    email,
    checked,
    password,
    setEmail,
    setChecked,
    setPassword,
  } = props;

  const handleSignIn = (e) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <MainInfoContainer>
      <Form marginTop="1px">

        <Title> Welcome Back </Title>
        <TitleInfo>
          {" "}
          Please enter the credentials below to access your account.{" "}
        </TitleInfo>
        <OutlineTextField
          value={email}
          id="outlined-size-small"
          label={allTranslations.email}
          placeholder="eg: john@xsolarsystems.com"
          variant="outlined"
          onChange={setEmail}
        />
        <PasswordWrapper>
          <PasswordField
            value={password}
            label={allTranslations.password}
            setPassword={setPassword}
            placeholder={allTranslations.password}
          />
        </PasswordWrapper>
        <OtherInfo>
          <CheckBox
            checked={checked}
            onChange={() => setChecked(!checked)}
            color="primary"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
          <RememberMe onClick={() => setChecked(!checked)}>
            {" "}
            {allTranslations.rememberMe}{" "}
          </RememberMe>
        </OtherInfo>
        {error !== "" && <AccountError> {error} </AccountError>}
        <PrimaryButton
          type="submit"
          marginTop="32px"
          size="large"
          label={allTranslations.buttons.letMeIn}
          loading={loading}
          disabled={!(email && password)}
          onClick={handleSignIn}
        />
        <MarginTop>
          <PrimaryButton
            type="submit"
            marginTop="32px"
            size="large"
            label="Siirry tilaukseen"
            onClick={() => push("/home")}
          />
        </MarginTop>
      </Form>
    </MainInfoContainer>
  );
};

export default SignIn;
