import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";

//Hooks
import { useBreakingBad } from "../../hooks/useBreakingBad";

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
    </Container>
  );
};

export default Characters;
