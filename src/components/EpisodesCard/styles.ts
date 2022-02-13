import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  index: number;
  lastIndex: number;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.primary};

  ${({ index, lastIndex }) =>
    index !== lastIndex &&
    css`
      margin-bottom: 20px;
    `}
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Season = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Episode = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Series = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;
