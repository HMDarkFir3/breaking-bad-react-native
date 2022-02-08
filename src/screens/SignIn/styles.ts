import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;

  padding: 20px 40px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoWrapper = styled.View`
  margin-top: ${getStatusBarHeight() + 60}px;
`;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Content = styled.View`
  width: 100%;
`;

export const InputWrapper = styled.View`
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
`;
