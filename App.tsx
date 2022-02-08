import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { ThemeProvider } from "styled-components";

//Routes
import Routes from "./src/routes";

//Theme
import { dark } from "./src/global/theme/dark";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <StatusBar style="light" translucent={true} />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
