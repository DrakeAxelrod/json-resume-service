// import Crawler from "crawler";
// import { extract_keywords, get_page_internal_urls, page_text } from ".";

// //let obsolete: string[] = []; // Array of what was crawled already

// const crawler = new Crawler({
//   keywords: [],
//   obsolete: [],
//   skipDuplicates: true,
// });

// export const crawlAllUrls = (url: string) => {
//   console.log(`Crawling ${url}`);
//   crawler.addListener("finish", () => console.log("Finished"))
//   crawler.queue({
//     uri: url,
//     callback: (err, res, done) => {
//       if (err) throw err;
//       let $ = res.$;
//       try {
//         //const urls = get_page_internal_urls($);
//         let urls = $("a");
//         //res.options.keywords.concat(extract_keywords(page_text($)))
        
//         Object.keys(urls).forEach((item) => {
//           if (urls[item].type === "tag") {
//             let href = urls[item].attribs.href;
//             if (href && !res.options.obsolete.includes(href)) {
//               if (href[0] === "/" && href.length > 1) {
//                 href = href.trim();
//                 res.options.obsolete.push(href);
//                 // Slow down the
//                 setTimeout(function () {
//                   href.startsWith(url)
//                     ? crawlAllUrls(href)
//                     : crawlAllUrls(`${url}${href}`);
//                 }, 1000);
//               }
//             }
//           }
//         });
//       } catch (e) {
//         console.error(`Encountered an error crawling ${url}. Aborting crawl.`);
//         done();
//       }
//       done();
//     },
//   });
// }

export {}
