import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

//Contexts
import AuthProvider from "./src/contexts/AuthContext";

//Routes
import Routes from "./src/routes";

//Theme
import { dark } from "./src/global/theme/dark";

const App: React.FC = () => {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={dark}>
      <AuthProvider>
        <StatusBar style="light" translucent={true} />
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
