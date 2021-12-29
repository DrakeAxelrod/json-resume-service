// import { compile, compileFromFile } from "json-schema-to-typescript";
const { compile, compileFromFile } = require("json-schema-to-typescript");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const resume_schema_path = path.join(process.cwd(), "schemas", "resume.schema.json");
const resume_type_path = path.join(process.cwd(), "types", "json-resume.d.ts");

const get_json_resume_schema_and_generate_schema_and_type_files = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json"
  );
  const types = await compile(data, "JSONResumeSchema")
  fs.writeFileSync(resume_schema_path, JSON.stringify(data, null, 2));
  fs.writeFileSync(resume_type_path, types);
};


get_json_resume_schema_and_generate_schema_and_type_files()
