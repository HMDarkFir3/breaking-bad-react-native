import * as React from "react";

//Components
import Input from "../../components/Input";

//Styles
import {
  Container,
  LogoWrapper,
  Logo,
  Content,
  InputWrapper,
  ButtonWrapper,
} from "./styles";

const SignIn: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  return (
    <Container>
      <LogoWrapper>
        <Logo source={require("../../assets/logo.png")} />
      </LogoWrapper>

      <Content>
        <InputWrapper>
          <Input value={name} onChangeText={setName} placeholder="Name" />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />
        </InputWrapper>
        <ButtonWrapper></ButtonWrapper>
      </Content>
    </Container>
  );
};

export default SignIn;
