import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

//Components
import Input from "../../components/Input";
import Button from "../../components/Button";

//Styles
import {
  Container,
  BackButtonWrapper,
  ChevronIcon,
  InputWrapper,
  ButtonWrapper,
} from "./styles";

const SignUp: React.FC = () => {
  const { goBack } = useNavigation();
  const theme = useTheme();

  function handleBackButton() {
    goBack();
  }

  return (
    <Container>
      <BackButtonWrapper activeOpacity={0.7} onPress={handleBackButton}>
        <ChevronIcon name="chevron-left" />
      </BackButtonWrapper>

      <InputWrapper>
        <Input placeholder="E-mail" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
      </InputWrapper>

      <ButtonWrapper>
        <Button
          backgroundColor={theme.colors.secondary}
          font={theme.fonts.bold}
          title="Sign Up"
        />

        <Button
          backgroundColor={theme.colors.background}
          font={theme.fonts.regular}
          title="Already have an account?"
          onPress={handleBackButton}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default SignUp;
