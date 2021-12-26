import axios from "axios";
import cheerio, { CheerioAPI } from "cheerio";
import keyword_extractor from "keyword-extractor";

const regex_rm_newlines = /\r?\n|\r/g;
const regex_rm_non_letters = /[^A-Za-z ]+/g;
const regex_rm_all_spaces = /\s+/g;
const regex_rm = /^[\r\n]+|[\r\n]+$|  +|\n/g;

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
    .replace(regex_rm_non_letters, " ")
    .replace(regex_rm_all_spaces, " ")
    .split(" ")
    .map((x) => x.split(/(?=[A-Z])/).join(" "))
    .join(" ");
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
  return keywords;
};

const get_all_external_urls = ($: CheerioAPI, baseURL: string) => {
  const set = new Set<string>();
  $("a")
    .toArray()
    .map((el) => {
      const href = el.attribs.href;
      if (href && href[0] === "h" && href.length > 1 && !href.includes(baseURL)) {
        set.add(href);
      }
    });
  return Array.from(set);
}

export const get_job_posting_info = ($: CheerioAPI, baseURL: string) => {
  const info: { [key: string]: any } = {};
  info["sentences"] = $.root()
    .text()
    .replace(regex_rm, "#")
    .replace(/\#+/g, "#")
    .split("#")
    .map((entry: string) => {
      if (entry && entry.length > 20) {
        return entry;
      }
    })
    .filter((e) => e);

  info["keywords"] = get_page_keywords($)
  const urls = get_all_external_urls($, baseURL);
  // console.log(urls)
  return info;
};

//^[^\r\t\[\]]*\z
//[A-Z][^\.!?]*[\.!?]
