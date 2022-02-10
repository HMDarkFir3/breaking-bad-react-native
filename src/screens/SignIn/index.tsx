import * as React from "react";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useKeyboard } from "@react-native-community/hooks";
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
  LogoWrapper,
  Logo,
  Content,
  InputWrapper,
  ButtonWrapper,
} from "./styles";

const SignIn: React.FC = () => {
  //Hooks
  const keyboard = useKeyboard();
  const { navigate } = useNavigation();
  const theme = useTheme();

  //States
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  //Refs
  const inputEmailRef = React.useRef<TextInput>(null);
  const inputPasswordRef = React.useRef<TextInput>(null);

  const logoOpacity = useSharedValue(1);
  const offsetY = useSharedValue(0);

  const animatedLogoOpacity = useAnimatedStyle(() => {
    return {
      opacity: logoOpacity.value,
    };
  });

  const animatedOffsetY = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetY.value }],
    };
  });

  if (keyboard.keyboardShown) {
    ("worklet");
    logoOpacity.value = withTiming(0, { duration: 300 });
    offsetY.value = withTiming(RFValue(-150), { duration: 600 });
  } else {
    logoOpacity.value = withTiming(1, { duration: 300 });
    offsetY.value = withTiming(RFValue(0), { duration: 600 });
  }

  function handleSignUp() {
    navigate("SignUp");
  }

  function inputOnBlur() {
    if (keyboard.keyboardShown === false) {
      inputEmailRef.current?.blur();
      inputPasswordRef.current?.blur();
    }
  }

  React.useEffect(() => {
    inputOnBlur();
  }, [keyboard.keyboardShown]);

  return (
    <Container>
      <LogoWrapper style={animatedLogoOpacity}>
        <Logo source={require("../../assets/logo.png")} />
      </LogoWrapper>

      <Content style={animatedOffsetY}>
        <InputWrapper>
          <Input
            ref={inputEmailRef}
            value={name}
            onChangeText={setName}
            placeholder="E-mail"
            onBlur={inputOnBlur}
          />
          <Input
            ref={inputPasswordRef}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            onBlur={inputOnBlur}
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button
            title="Sign In"
            font={theme.fonts.bold}
            backgroundColor={theme.colors.secondary}
          />

          <Button
            title="Don't have an account? Sign Up"
            font={theme.fonts.light}
            backgroundColor={theme.colors.background}
            onPress={handleSignUp}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
};

export default SignIn;
