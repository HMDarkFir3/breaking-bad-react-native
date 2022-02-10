import * as React from "react";
import { useKeyboard } from "@react-native-community/hooks";
import { useNavigation } from "@react-navigation/native";
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

//Components
import Input from "../../components/Input";
import Button from "../../components/Button";

//Styles
import {
  Container,
  Content,
  BackButtonWrapper,
  ChevronIcon,
  InputWrapper,
  ButtonWrapper,
} from "./styles";

const SignUp: React.FC = () => {
  const keyboard = useKeyboard();
  const { goBack } = useNavigation();
  const theme = useTheme();

  const offsetY = useSharedValue(0);

  const animatedOffsetY = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetY.value }],
    };
  });

  if (keyboard.keyboardShown) {
    ("worklet");
    offsetY.value = withTiming(RFValue(50), { duration: 600 });
  } else {
    ("worklet");
    offsetY.value = withTiming(RFValue(0), { duration: 600 });
  }

  function handleBackButton() {
    goBack();
  }

  return (
    <Container>
      <BackButtonWrapper activeOpacity={0.7} onPress={handleBackButton}>
        <ChevronIcon name="chevron-left" />
      </BackButtonWrapper>

      <Content style={animatedOffsetY}>
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
      </Content>
    </Container>
  );
};

export default SignUp;
