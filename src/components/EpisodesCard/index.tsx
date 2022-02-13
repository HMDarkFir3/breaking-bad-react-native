import * as React from "react";

//DTOS
import { EpisodesDTO } from "../../dtos";

//Styles
import { Container, Content, Title, Season, Episode, Series } from "./styles";

//Interfaces
interface Props {
  data: EpisodesDTO;
  index: number;
  lastIndex: number;
}

const EpisodesCard: React.FC<Props> = (props) => {
  const { index, lastIndex } = props;
  const { title, season, episode, series } = props.data;

  return (
    <Container index={index} lastIndex={lastIndex}>
      <Content>
        <Title>Title: {title}</Title>
        <Season>Season: {season}</Season>
        <Episode>Episode: {episode}</Episode>
        <Series>Series: {series}</Series>
      </Content>
    </Container>
  );
};

export default EpisodesCard;
