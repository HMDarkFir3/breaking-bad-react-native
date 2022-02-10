import * as React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

//Interfaces
interface Props extends TouchableOpacityProps {
  title: string;
  font: string;
  backgroundColor: string;
}

const Button: React.FC<Props> = (props) => {
  const { title, font, backgroundColor, ...rest } = props;

  return (
    <Container backgroundColor={backgroundColor} activeOpacity={0.7} {...rest}>
      <Title font={font}>{title}</Title>
    </Container>
  );
};

export default Button;
