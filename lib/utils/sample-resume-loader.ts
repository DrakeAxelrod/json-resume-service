import { readFileSync } from "fs";
import { join } from "path";

const root = process.cwd();
const path = join(root, "sample-data", "sample.resume.json");

export const load_sample_resume = () => {
  const sample = readFileSync(path, "utf8");
  return JSON.parse(sample);
};
