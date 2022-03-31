import * as React from "react";
import { FlatList, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

//Services
import { breakingBadApi } from "../../services/api";

//DTOS
import { EpisodesDTO } from "../../dtos/EpisodesDTO";

//Components
import EpisodesCard from "../../components/EpisodesCard";

//Styles
import { Container, LoadingContainer, Loading } from "./styles";

const Episodes: React.FC = () => {
  const theme = useTheme();

  const [episodes, setEpisodes] = React.useState<EpisodesDTO[]>([]);
  const [search, setSearch] = React.useState<string>("breaking bad");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  async function fetchEpisodes(search: string) {
    await breakingBadApi
      .get<EpisodesDTO[]>("/episodes", {
        params: {
          category: search,
        },
      })
      .then((response) => {
        setEpisodes(response.data);
      })
      .catch(() => {
        Alert.alert("Don't was possible to show the episodes");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
        showsVerticalScrollIndicator={false}
        style={{ marginVertical: 20 }}
      />
    </Container>
  );
};

export default Episodes;
