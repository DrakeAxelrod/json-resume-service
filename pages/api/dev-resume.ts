import { Req, Res } from "types";
import fs from "fs";
import path from "path";

const root = process.cwd();
const path_to_demo_resume = path.join(root, "demo-data", "resume.json")
const handler = async (req: Req, res: Res) => {
  const demo_data = fs.readFileSync(path_to_demo_resume, "utf-8")
  res.status(200).json(demo_data);
};

export default handler;
