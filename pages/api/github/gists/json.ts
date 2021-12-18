import axios from "axios";
import { Req, Res } from "types";
import { github_api_base_url } from "@lib/constants";

const get_resume_json_from_public_gists = (username: string, gists: []) => {
  const result: any = gists.find((gist: any) =>
    gist.files.hasOwnProperty("resume.json")
  );
  return `https://gist.githubusercontent.com/${username}/${result.id}/raw/resume.json`;
};

const handler = async (req: Req, res: Res) => {
  const username = req.query.username as string
  if (username) {
    const { data } = await axios.get(
      `${github_api_base_url}/users/${username}/gists`
    );
    const json_resume_url = get_resume_json_from_public_gists(username, data);
    const result = await axios.get(json_resume_url)
    const raw_json = result.data
    res.status(200).json(JSON.stringify(raw_json, null, 2));
  } else {
    res
      .status(404)
      .json({
        msg: "please provide your github username as a query parameter - example: ?username=SpaceCaptain",
      });
  }
};

export default handler;
