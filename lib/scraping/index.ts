import axios from "axios";
import cheerio, { CheerioAPI } from "cheerio";
import keyword_extractor from "keyword-extractor";
import Crawler from "crawler";

// export const requester = async (baseURL: string) => {
//   return axios.create({
//     baseURL: baseURL,
//   });
// }

export const fetchHTML = async (url: string) => {
  const { data } = await axios.get(url);
  return cheerio.load(data);
};

export const page_text = ($: CheerioAPI) => {
  return $("html *")
    .remove("script *")
    .remove("noscript *")
    .remove("style *")
    .text()
    .replace(/[^A-Za-z ]+/g, " ")
    .replace(/\s+/g, " ")
    .split(" ")
    .map((x) => x.split(/(?=[A-Z])/).join(" "))
    .join(" ");
  // const keywords = keyword_extractor.extract(text, {
  //   remove_digits: true,
  //   return_changed_case: true,
  //   remove_duplicates: true,
  //   return_chained_words: false,
  // });
  // return keywords;
};

export const extract_keywords = (text: string) => {
  const keywords = keyword_extractor.extract(text, {
    remove_digits: true,
    return_changed_case: true,
    remove_duplicates: true,
    return_chained_words: false,
  });
  return keywords;
};

export const get_page_internal_urls = ($: CheerioAPI) => {
  const set = new Set<string>();
  $("a")
    .toArray()
    .map((el) => {
      const href = el.attribs.href;
      if (href && href[0] === "/" && href.length > 1) {
        set.add(href);
      }
    });
  return Array.from(set);
};

export const get_page_keywords = ($: CheerioAPI) => {
  const text = page_text($);
  const keywords = extract_keywords(text);
  return keywords
};

export const get_all_key_words = async (baseUrl: string) => {
  const c = new Crawler({});
  const obsolete: string[] = [];
  const $ = await fetchHTML(baseUrl);
  const urls = get_page_internal_urls($);
  // crawl_url(baseUrl)
  return;
};

// const crawl_url = async (url: string) => {
//     const c = new Crawler({});
//     const keywords: string[] = []
//     c.queue({
//       uri: url,
//       callback: (err, res, done) => {
//         if (err) throw err;
//         const urls = get_page_internal_urls(res.$);
//         get_page_keywords(res.$);
//         keywords.concat(get_page_keywords(res.$))
//         done();
//       },
//     });
//   console.log(keywords);
// };
