import * as React from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI,
  GOOGLE_RESPONSE_TYPE,
  GOOGLE_SCOPE,
} from "@env";

//API
import { googleOAuthApi } from "../services/api";

//DTOS
import { UserDTO } from "../dtos";

//Storages
import { COLLECTION_USER } from "../storages";

//Interfaces
interface AuthContextData {
  user: UserDTO;
  isLoading: boolean;
  signInWithGoogle: () => void;
  logOut: () => void;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export const AuthContext = React.createContext({} as AuthContextData);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<UserDTO>({} as UserDTO);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function loadUser() {
    const userStoraged = await AsyncStorage.getItem(COLLECTION_USER);

    if (userStoraged) {
      const userLogged = JSON.parse(userStoraged);

      setUser(userLogged);
    }
  }

  async function signInWithGoogle() {
    try {
      setIsLoading(true);

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${GOOGLE_RESPONSE_TYPE}&scope=${encodeURI(
        String(GOOGLE_SCOPE)
      )}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        await googleOAuthApi
          .get("/userinfo", {
            params: {
              alt: "json",
              access_token: params.access_token,
            },
          })
          .then(async (response) => {
            const userLogged = {
              id: response.data.id,
              first_name: response.data.given_name,
              last_name: response.data.family_name,
              email: response.data.email,
              photo: response.data.picture,
            };

            setUser(userLogged);

            await AsyncStorage.setItem(
              COLLECTION_USER,
              JSON.stringify(userLogged)
            );
          });
      }
    } catch (error) {
      console.log(error.message);
      Alert.alert("Don't was possible to connect google account");
    } finally {
      setIsLoading(false);
    }
  }

  async function logOut() {
    await AsyncStorage.removeItem(COLLECTION_USER);

    setUser({} as UserDTO);
  }

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signInWithGoogle,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
