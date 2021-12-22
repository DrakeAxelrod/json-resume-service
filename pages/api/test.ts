import { Req, Res } from "types";
import { fetchHTML, get_job_posting_info, page_text } from "@lib/scraping";


const handler = async (req: Req, res: Res) => {
  const $ = await fetchHTML("https://www.linkedin.com/jobs/view/2782591198");
  const info = get_job_posting_info($, "https://www.linkedin.com");
  res.send(info);
};

export default handler;
