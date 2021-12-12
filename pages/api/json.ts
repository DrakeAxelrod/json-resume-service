import { NextApiRequest, NextApiResponse } from "next";
export default async function (_: NextApiRequest, res: NextApiResponse) {
  const user = "DrakeAxelrod";
  const gist = "33726f328fa7d66f781f6408aac9c20e";
  const file = "resume.json"
  const uri = `https://gist.github.com/${user}/${gist}/raw/${file}`;
  const result = await (await fetch(uri)).json()
  res.status(200).json(result);
}
