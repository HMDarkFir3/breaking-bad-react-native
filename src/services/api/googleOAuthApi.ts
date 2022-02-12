import axios from "axios";

export const googleOAuthApi = axios.create({
  baseURL: "https://www.googleapis.com/oauth2/v1",
});
