import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

//Icons
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight()}px;
  padding: 12px 20px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const UserPhotoWrapper = styled.View`
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;

  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 32px;
`;

export const UserPhoto = styled.Image`
  width: 60px;
  height: 60px;

  border-radius: 30px;
`;

export const WelcomeWrapper = styled.View`
  justify-content: center;

  margin-left: 20px;
`;

export const Welcome = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.secondary_text};
`;

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const LogOutButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const LogOutIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.primary_text};
`;
