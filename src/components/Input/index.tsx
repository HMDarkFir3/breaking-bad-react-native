import * as React from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

//Interfaces
interface Props extends TextInputProps {}

const Input: React.FC<Props> = (props) => {
  const { ...rest } = props;

  const theme = useTheme();

  return (
    <Container
      placeholderTextColor={theme.colors.placeholder_color}
      {...rest}
    />
  );
};

export default Input;
