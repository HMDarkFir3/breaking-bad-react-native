import * as React from "react";
import { TouchableOpacityProps } from "react-native";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";

import {
  Container,
  Content,
  IconArea,
  LoadingWrapper,
  Loading,
  Title,
} from "./styles";

//Interfaces
interface Props extends TouchableOpacityProps {
  title: string;
  isLoading: boolean;
  icon: React.FC | React.FC<SvgProps>;
}

const Button: React.FC<Props> = (props) => {
  const { title, isLoading, icon: Icon, ...rest } = props;

  const theme = useTheme();

  return (
    <Container activeOpacity={0.7} {...rest}>
      <Content>
        <IconArea>
          <Icon width={24} />
        </IconArea>

        {isLoading ? (
          <LoadingWrapper>
            <Loading size="small" color={theme.colors.primary_text} />
          </LoadingWrapper>
        ) : (
          <Title>{title}</Title>
        )}
      </Content>
    </Container>
  );
};

export default Button;
