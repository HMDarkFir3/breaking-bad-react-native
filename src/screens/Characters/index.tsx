import * as React from "react";
import { FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

//Hooks
import { useBreakingBad } from "../../hooks/useBreakingBad";

//Components
import CharactersCard from "../../components/CharactersCard";

//Styles
import { Container, LoadingContainer, Loading } from "./styles";

const Characters: React.FC = () => {
  const { characters, isLoading, fetchCharacters } = useBreakingBad();
  const theme = useTheme();

  const [search, setSearch] = React.useState<string>("breaking bad");

  React.useEffect(() => {
    fetchCharacters(search);
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
      />
    </Container>
  );
};

export default Characters;
