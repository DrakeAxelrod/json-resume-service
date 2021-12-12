import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import path from "path";
import puppeteer from "puppeteer"


const jsonResumeURI =
  "https://gist.githubusercontent.com/DrakeAxelrod/33726f328fa7d66f781f6408aac9c20e/raw/resume.json";


export const getJsonResume = async (uri: string) => {
  return await (await fetch(uri)).json();
}

export const html2pdf = async (url: string) => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle0",
  });
  const pdf = await page.pdf({ format: 'a4' });
  await browser.close();
  // saves file to this project needed for debugging
  // fs.writeFileSync("test.pdf", pdf);
  return pdf
}


// const resumeURL = "https://registry.jsonresume.org/DrakeAxelrod";
// const apiURL = "http://localhost:3000/api/html2pdf";
// const response = await fetch(apiURL, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ url: resumeURL }),
// });
// const buf = Buffer.from(await response.arrayBuffer());
// saveResumeToFiles(buf, resumeURL.split("/").pop() as string);
// export const saveResumeToFiles = (pdf: any, defaultFileName: string) => {
//   const filename = `${defaultFileName}.pdf`
//   const p = path.join(process.cwd(), "public", filename);
//   fs.writeFileSync(p, pdf);
// }

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const pdf = await html2pdf(req.body.url)
  res.setHeader("Content-Type", "application/pdf");
  // res.setHeader("Content-Disposition", "attachment; filename=dummy.pdf");
  res.setHeader('Content-Length', pdf.length)
  res.status(200).send(pdf)
}
