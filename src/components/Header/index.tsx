import * as React from "react";
import { Alert } from "react-native";
import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Styles
import {
  Container,
  Wrapper,
  UserPhotoWrapper,
  UserPhoto,
  WelcomeWrapper,
  Welcome,
  Username,
  LogOutButton,
  LogOutIcon,
} from "./styles";

//Interfaces
interface Props extends BottomTabHeaderProps {}

const Header: React.FC<Props> = (props) => {
  const { user, logOut } = useAuth();

  function handleLogOut() {
    Alert.alert("Warning!", "Want to exit the application", [
      {
        style: "cancel",
        text: "No",
      },
      {
        onPress: () => logOut(),
        text: "Yes",
      },
    ]);
  }

  return (
    <Container>
      <Wrapper>
        <UserPhotoWrapper>
          <UserPhoto source={{ uri: user.photo }} />
        </UserPhotoWrapper>

        <WelcomeWrapper>
          <Welcome>Hello,</Welcome>
          <Username>
            {user?.first_name} {user?.last_name}
          </Username>
        </WelcomeWrapper>
      </Wrapper>

      <LogOutButton activeOpacity={0.7} onPress={handleLogOut}>
        <LogOutIcon name="log-out" />
      </LogOutButton>
    </Container>
  );
};

export default Header;
