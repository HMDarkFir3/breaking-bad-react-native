import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: ${RFValue(56)}px;

  margin-bottom: 16px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: ${RFValue(56)}px;
`;

export const IconArea = styled.View`
  align-items: center;
  justify-content: center;

  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-right-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_text};
`;

export const Title = styled.Text`
  flex: 1;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;
