import axios from "axios";

export const github_client = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});
