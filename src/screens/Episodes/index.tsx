import * as React from "react";
import { FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

//Hooks
import { useBreakingBad } from "../../hooks/useBreakingBad";

//Components
import EpisodesCard from "../../components/EpisodesCard";

//Styles
import { Container, LoadingContainer, Loading } from "./styles";

const Episodes: React.FC = () => {
  const { episodes, isLoading, fetchEpisodes } = useBreakingBad();
  const theme = useTheme();

  const [search, setSearch] = React.useState<string>("breaking bad");

  React.useEffect(() => {
    fetchEpisodes(search);
  }, []);

  if (isLoading) {
    return (
      <LoadingContainer>
        <StatusBar style="light" backgroundColor={theme.colors.primary} />
        <Loading size="large" color={theme.colors.secondary} />
      </LoadingContainer>
    );
  }

  return (
    <Container>
      <FlatList
        data={episodes}
        keyExtractor={(item) => String(item.episode_id)}
        renderItem={({ item, index }) => (
          <EpisodesCard
            data={item}
            index={index}
            lastIndex={episodes.length - 1}
          />
        )}
        style={{ marginVertical: 20 }}
      />
    </Container>
  );
};

export default Episodes;
