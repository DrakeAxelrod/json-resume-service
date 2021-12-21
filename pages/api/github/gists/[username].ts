import { get_gist_resume_json, github_client } from "@lib/api/github";
import { Req, Res } from "types";

const handler = async (req: Req, res: Res) => {
  const username = req.query.username as string;
  const { data } = await github_client.get(`/users/${username}/gists`);
  const json_resume = await get_gist_resume_json(username, data);
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
