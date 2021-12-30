import axios from "axios";
import { Req, Res } from "types";
import { load_sample_resume } from "@utils/sample-loader";

const handler = async (req: Req, res: Res) => {
  const sample = load_sample_resume()
  res.status(200).json(JSON.stringify(sample, null, 2));
};

export default handler;
