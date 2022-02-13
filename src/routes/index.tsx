import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

//Hooks
import { useAuth } from "../hooks/useAuth";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

//Interfaces
export interface RoutesProps {}

const Routes: React.FC = () => {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
