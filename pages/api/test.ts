import { Req, Res } from "types";
import { fetchHTML, get_all_key_words, get_page_internal_urls, page_text } from "@lib/scraping";
// import { crawlAllUrls } from "@lib/scraping/crawler";

const handler = async (req: Req, res: Res) => {
  const $ = await fetchHTML("https://www.saab.com");
  // const result = page_text($);
  // const urls = get_page_internal_urls($);
  const result = get_all_key_words("https://www.saab.com");
  // crawlAllUrls("https://www.saab.com");
  res.send({});
};

export default handler;
