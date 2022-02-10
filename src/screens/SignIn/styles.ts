import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 20px 32px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoWrapper = styled(Animated.View)`
  margin-top: ${getStatusBarHeight() + 60}px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Content = styled(Animated.View)`
  width: 100%;
  margin-bottom: ${60 - 16}px;
`;

export const InputWrapper = styled.View``;

export const ButtonWrapper = styled.View``;
