import * as React from "react";

//DTOS
import { CharactersDTO } from "../../dtos";

//Styles
import { Container, Image, Content, Name, Nickname, Status } from "./styles";

//Interfaces
interface Props {
  data: CharactersDTO;
  index: number;
  lastIndex: number;
}

const Characters: React.FC<Props> = (props) => {
  const { index, lastIndex } = props;
  const { img, name, nickname, status } = props.data;

  return (
    <Container index={index} lastIndex={lastIndex}>
      <Image source={{ uri: img }} />

      <Content>
        <Name>{name}</Name>
        <Nickname>{nickname}</Nickname>
        <Status>{status}</Status>
      </Content>
    </Container>
  );
};

export default Characters;
