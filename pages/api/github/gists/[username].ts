import axios from "axios";
import { github_client } from "@lib/api/github";
import { Req, Res } from "types";

const get_resume_json = async (username: string, gists: []) => {
  const result: any = gists.find((gist: any) =>
    gist.files.hasOwnProperty("resume.json")
  );
  let _data = null;
  if (username && result ? result.hasOwnProperty("id") : false) {
    const url = `https://gist.githubusercontent.com/${username}/${result.id}/raw/resume.json`;
    const { data } = await axios.get(url);
    _data = data;
  }
  return _data;
};

const handler = async (req: Req, res: Res) => {
  const username = req.query.username as string;
  const { data } = await github_client.get(`/users/${username}/gists`);
  const json_resume = await get_resume_json(username, data);
  let message;
  if (json_resume === null) {
    res.statusCode = 404;
    message = `could not find a resume.json in the users gists`;
  } else {
    res.statusCode = 200;
    message = JSON.stringify(json_resume, null, 2);
  }
  res.json(message);
};

export default handler;
