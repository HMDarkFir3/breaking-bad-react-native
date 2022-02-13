import * as React from "react";
import { Alert } from "react-native";

//Api
import { breakingBadApi } from "../services/api";

//DTOS
import { CharactersDTO, EpisodesDTO } from "../dtos";

//Interfaces
interface BreakingBadContextData {
  characters: CharactersDTO[];
  episodes: EpisodesDTO[];
  isLoading: boolean;
  fetchCharacters: (search: string) => void;
  fetchEpisodes: (search: string) => void;
}

interface BreakingBadProviderProps {
  children: React.ReactNode;
}

export const BreakingBadContext = React.createContext(
  {} as BreakingBadContextData
);

const BreakingBadProvider: React.FC<BreakingBadProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = React.useState<CharactersDTO[]>(null);
  const [episodes, setEpisodes] = React.useState<EpisodesDTO[]>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function fetchCharacters(search: string) {
    try {
      setIsLoading(true);

      const response = await breakingBadApi.get<CharactersDTO>("/characters", {
        params: {
          category: search,
        },
      });

      setCharacters([response.data]);
    } catch (error) {
      console.log(error.message);
      Alert.alert("Don't was possible to show the characters");
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchEpisodes(search: string) {
    try {
      setIsLoading(true);

      const response = await breakingBadApi.get<EpisodesDTO>("/episodes", {
        params: {
          series: search,
        },
      });

      setEpisodes([response.data]);
    } catch (error) {
      console.log(error.message);
      Alert.alert("Don't was possible to show the episodes");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <BreakingBadContext.Provider
      value={{
        characters,
        episodes,
        isLoading,
        fetchCharacters,
        fetchEpisodes,
      }}
    >
      {children}
    </BreakingBadContext.Provider>
  );
};

export default BreakingBadProvider;
