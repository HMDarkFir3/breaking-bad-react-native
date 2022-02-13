import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  index: number;
  lastIndex: number;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;

  ${({ index, lastIndex }) =>
    index !== lastIndex &&
    css`
      margin-bottom: 20px;
    `}

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Image = styled.Image`
  width: 100px;
  height: 150px;
`;

export const Content = styled.View`
  flex: 1;

  padding: 20px;

  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary};
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Nickname = styled.Text`
  margin-top: 4px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Status = styled.Text`
  margin-top: 4px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;
