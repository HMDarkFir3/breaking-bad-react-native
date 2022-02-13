import * as React from "react";
import { BreakingBadContext } from "../contexts/BreakingBadContext";

const useBreakingBad = () => {
  const content = React.useContext(BreakingBadContext);

  return content;
};

export { useBreakingBad };
