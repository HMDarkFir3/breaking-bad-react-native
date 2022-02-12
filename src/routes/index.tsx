import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Routes
import AuthRoutes from "./auth.routes";

//Interfaces
export interface RoutesProps {}

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
