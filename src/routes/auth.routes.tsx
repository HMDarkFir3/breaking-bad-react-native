import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const { Navigator, Screen } = createNativeStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
};

export default AuthRoutes;
