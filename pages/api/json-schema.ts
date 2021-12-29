import { Req, Res } from "types";
import { compile, compileFromFile } from "json-schema-to-typescript";
import axios from "axios";
import fs from "fs"
import path from "path"

const handler = async (req: Req, res: Res) => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/jsonresume/resume-schema/master/schema.json"
  );
  const result = await compile(data, "JSONResumeSchema")
  fs.writeFileSync(path.join(process.cwd(), "types", "test.d.ts"), result);
  res.status(200).json(result)
};

// const { data } = await axios.get(
//   "http://localhost:3000/api/github/gists/json/DrakeAxelrod"
// );

// const page = await getPage(true)
// const html = ReactDOMServer.renderToStaticMarkup(<Resume resume={data} styles={styles} />)
// await page.setContent(html);
// await page.pdf({ path: "result.pdf" });
// res.send(data)

export default handler;
