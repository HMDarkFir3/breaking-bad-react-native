import axios from "axios";

export const breakingBadApi = axios.create({
  baseURL: "https://breakingbadapi.com/api",
});
