import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput`
  width: 100%;

  margin-bottom: 16px;
  padding: 12px 16px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;
