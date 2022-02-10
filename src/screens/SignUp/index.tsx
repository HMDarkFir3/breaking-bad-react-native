import * as React from "react";
import { TextInput } from "react-native";
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
  //Hooks
  const keyboard = useKeyboard();
  const { goBack } = useNavigation();
  const theme = useTheme();

  //Refs
  const inputEmailRef = React.useRef<TextInput>(null);
  const inputPasswordRef = React.useRef<TextInput>(null);
  const inputConfirmPasswordRef = React.useRef<TextInput>(null);

  //Animations
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

  function inputOnBlur() {
    if (keyboard.keyboardShown === false) {
      inputEmailRef.current?.blur();
      inputPasswordRef.current?.blur();
      inputConfirmPasswordRef.current?.blur();
    }
  }

  function handleBackButton() {
    goBack();
  }

  React.useEffect(() => {
    inputOnBlur();
  }, [keyboard.keyboardShown]);

  return (
    <Container>
      <BackButtonWrapper activeOpacity={0.7} onPress={handleBackButton}>
        <ChevronIcon name="chevron-left" />
      </BackButtonWrapper>

      <Content style={animatedOffsetY}>
        <InputWrapper>
          <Input
            ref={inputEmailRef}
            placeholder="E-mail"
            onBlur={inputOnBlur}
          />
          <Input
            ref={inputPasswordRef}
            placeholder="Password"
            onBlur={inputOnBlur}
          />
          <Input
            ref={inputConfirmPasswordRef}
            placeholder="Confirm Password"
            onBlur={inputOnBlur}
          />
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
