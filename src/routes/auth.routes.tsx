import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import SignIn from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  );
};

export default AuthRoutes;
