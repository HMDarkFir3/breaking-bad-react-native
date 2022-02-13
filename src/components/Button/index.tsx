import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";

import { Container, Content, IconArea, Title } from "./styles";

//Interfaces
interface Props extends TouchableOpacityProps {
  title: string;
  icon: React.FC | React.FC<SvgProps>;
}

const Button: React.FC<Props> = (props) => {
  const { title, icon: Icon, ...rest } = props;

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Content>
        <IconArea>
          <Icon width={24} />
        </IconArea>

        <Title>{title}</Title>
      </Content>
    </Container>
  );
};

export default Button;
