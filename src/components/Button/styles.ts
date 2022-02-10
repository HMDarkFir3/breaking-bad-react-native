import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

//Interfaces
interface ContainerProps {
  backgroundColor: string;
}

interface TitleProps {
  font: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 16px;
  padding: 12px;

  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 8px;
`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ font }) => font};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.white};
`;
