import { readFileSync } from "fs";
import { join } from "path";

const root = process.cwd();
const resume_path = join(root, "sample-data", "sample.resume.json");
const coverletter_path = join(root, "sample-data", "sample.coverletter.json");

export const load_sample_resume = () => {
  const sample = readFileSync(resume_path, "utf8");
  return JSON.parse(sample);
};

export const load_sample_coverletter = () => {
  const sample = readFileSync(coverletter_path, "utf8");
  return JSON.parse(sample);
};
