import { Req, Res } from "types";
import { fetchHTML, get_job_posting_info, page_text } from "@lib/scraping";
import ReactDOMServer from "react-dom/server";
import axios from "axios";
import Resume from "@components/resume";
import styles from "@styles/resume.module.scss";
import { getPage } from "@lib/api/puppeteer";
import { getIntersectionOfTwoWordArrays } from "@lib/language";
import { getJobKeyWordsOverlap, getResumeSkillsKeywords } from "@lib/resume-helpers";
import { compile } from "json-schema-to-typescript";


const handler = async (req: Req, res: Res) => {
  const $ = await fetchHTML("https://www.linkedin.com/jobs/view/2831380268");
  const info = get_job_posting_info($, "https://www.linkedin.com");
  const { data } = await axios.get(
    "http://localhost:3000/api/github/gists/json/DrakeAxelrod"
  );
  const overlap = getJobKeyWordsOverlap(data, info)
  res.send(overlap);
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
