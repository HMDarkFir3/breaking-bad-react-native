import * as React from "react";

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
import LogoGithubSvg from "../../assets/logo_github.svg";

const SignIn: React.FC = () => {
  const { user, loadingAuthGoogle, loadingAuthGithub, signInWithGoogle } =
    useAuth();

  console.log(user);

  return (
    <Container>
      <LogoWrapper>
        <Logo source={require("../../assets/logo.png")} />
      </LogoWrapper>

      <Content>
        <Title>Do social login to enter the app</Title>

        <ButtonWrapper>
          <Button
            icon={LogoGoogleSvg}
            title="Google"
            isLoading={loadingAuthGoogle}
            onPress={signInWithGoogle}
          />

          <Button
            icon={LogoGithubSvg}
            title="GitHub"
            isLoading={loadingAuthGithub}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default SignIn;
