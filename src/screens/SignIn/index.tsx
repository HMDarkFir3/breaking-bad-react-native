import * as React from "react";
import { StatusBar } from "expo-status-bar";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Button from "../../components/Button";

//Styles
import {
  Container,
  LogoWrapper,
  Logo,
  Content,
  Title,
  ButtonWrapper,
} from "./styles";

//SVG
import LogoGoogleSvg from "../../assets/logo_google.svg";

const SignIn: React.FC = () => {
  const { user, isLoading, signInWithGoogle } = useAuth();

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  return (
    <Container>
      <StatusBar style="light" translucent={true} />

      <LogoWrapper>
        <Logo source={require("../../assets/logo.png")} />
      </LogoWrapper>

      <Content>
        <Title>Do social login to enter the app</Title>

        <ButtonWrapper>
          <Button
            icon={LogoGoogleSvg}
            title={isLoading ? "Entering..." : "Sign in with Google"}
            onPress={handleSignInWithGoogle}
            disabled={isLoading}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default SignIn;
