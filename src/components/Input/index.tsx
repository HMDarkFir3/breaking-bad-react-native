import * as React from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components";

import { Container } from "./styles";

//Interfaces
interface Props extends TextInputProps {}

const Input: React.ForwardRefRenderFunction<TextInput, Props> = (
  props,
  ref
) => {
  const { ...rest } = props;

  const theme = useTheme();

  return (
    <Container
      ref={ref}
      placeholderTextColor={theme.colors.placeholder_color}
      {...rest}
    />
  );
};

export default React.forwardRef(Input);
