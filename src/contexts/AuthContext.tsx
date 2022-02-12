import * as React from "react";
import { Alert } from "react-native";
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

//Interfaces
interface AuthContextData {
  user: UserDTO;
  loadingAuthGoogle: boolean;
  loadingAuthGithub: boolean;
  signInWithGoogle: () => void;
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
  const [loadingAuthGoogle, setLoadingAuthGoogle] =
    React.useState<boolean>(false);
  const [loadingAuthGithub, setLoadingAuthGithub] = React.useState();

  async function signInWithGoogle() {
    try {
      setLoadingAuthGoogle(true);

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=${GOOGLE_RESPONSE_TYPE}&scope=${encodeURI(
        String(GOOGLE_SCOPE)
      )}`;

      console.log(authUrl);

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

            setLoadingAuthGoogle(true);
            setUser(userLogged);

            // await AsyncStorage.setItem(
            //   COLLECTION_USER,
            //   JSON.stringify(userLogged)
            // );
          });
      }
    } catch (error) {
      setLoadingAuthGoogle(false);

      Alert.alert("Atenção!", "Não foi possível fazer o login com o google.");
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, loadingAuthGoogle, loadingAuthGithub, signInWithGoogle }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
