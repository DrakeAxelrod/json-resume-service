import fs from "fs";
import path from "path";

const root = process.cwd();

export const load_sample_resume = () => {
  const sample = fs.readFileSync(
    path.join(root, "sample-data", "sample.resume.json"),
    "utf8"
  );
  return JSON.parse(sample)
};
