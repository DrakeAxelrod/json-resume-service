import axios from "axios";
import { Octokit } from "@octokit/core";
import { createAppAuth } from "@octokit/auth-app";
import fs from "fs"

const client_id = process.env.GITHUB_CLIENT
const client_secret = process.env.GITHUB_CLIENT_SECRET

// const auth = createAppAuth({
  
// })

export const github_api = new Octokit({
  auth: {
    client_id: client_id,
    client_secret: client_secret
  }
})
export const github = axios.create({
  baseURL: "https://api.github.com",
});

export const authHeader = {
  Authorization:
    "Basic " + Buffer.from(`${client_id}:${client_secret}`).toString("base64"),
};
