import axios from "axios";
import { Req, Res } from "types";
import { json_resume2md } from "@utils/json_resume2md"


const handler = async (req: Req, res: Res) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/github/gists/DrakeAxelrod"
  );
  const markdown_resume = json_resume2md(data)
  // console.log(markdown_resume)
  res.status(200).json({})
};

export default handler;
