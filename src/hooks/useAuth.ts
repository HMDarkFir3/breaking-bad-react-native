import * as React from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuth = () => {
  const content = React.useContext(AuthContext);

  return content;
};

export { useAuth };
