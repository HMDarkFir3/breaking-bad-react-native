import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 20px 32px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const LogoWrapper = styled.View``;

export const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Content = styled.View`
  width: 100%;

  margin-top: 60px;
`;

export const Title = styled.Text`
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const ButtonWrapper = styled.View``;
