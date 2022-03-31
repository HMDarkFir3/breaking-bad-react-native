import * as React from "react";
import { FlatList, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

//Services
import { breakingBadApi } from "../../services/api";

//DTOS
import { CharactersDTO } from "../../dtos/CharactersDTO";

//Components
import CharactersCard from "../../components/CharactersCard";

//Styles
import { Container, LoadingContainer, Loading } from "./styles";

const Characters: React.FC = () => {
  const theme = useTheme();

  const [search, setSearch] = React.useState<string>("breaking bad");
  const [characters, setCharacters] = React.useState<CharactersDTO[]>([]);
  const [offset, setOffset] = React.useState<number>(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [loadingMore, setLoadingMore] = React.useState<boolean>(false);

  function handleLoadMore() {
    setLoadingMore(true);
    setOffset((prevState) => prevState + 10);

    fetchCharacters(search, offset);
  }

  async function fetchCharacters(search: string, offset: number) {
    await breakingBadApi
      .get<CharactersDTO[]>("/characters", {
        params: {
          category: search,
          limit: 10,
          offset: offset,
        },
      })
      .then((response) => {
        if (offset === 0) {
          setCharacters(response.data);
        } else {
          setCharacters((prevState) => [...prevState, ...response.data]);
        }
      })
      .catch(() => {
        Alert.alert("Don't was possible to show the characters");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    fetchCharacters(search, offset);
  }, []);

  function renderFooter() {
    return (
      <>
        {loadingMore && (
          <LoadingContainer style={{ marginTop: 20 }}>
            <Loading size="large" color={theme.colors.secondary} />
          </LoadingContainer>
        )}
      </>
    );
  }

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
      <StatusBar style="light" backgroundColor={theme.colors.primary} />

      <FlatList
        data={characters}
        keyExtractor={(item) => String(item.char_id)}
        renderItem={({ item, index }) => (
          <CharactersCard
            data={item}
            index={index}
            lastIndex={characters.length - 1}
          />
        )}
        style={{ marginVertical: 20 }}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
      />
    </Container>
  );
};

export default Characters;
