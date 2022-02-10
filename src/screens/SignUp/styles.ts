import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 0 32px;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled(Animated.View)`
  width: 100%;
`;

export const BackButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  top: 52px;
  left: 32px;
`;

export const ChevronIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const InputWrapper = styled.View`
  width: 100%;
`;

export const ButtonWrapper = styled.View`
  width: 100%;
`;
