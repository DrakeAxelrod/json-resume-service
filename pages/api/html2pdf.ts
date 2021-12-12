import jsPDF from "jspdf";
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import puppeteer from "puppeteer"


const jsonResumeURI =
  "https://gist.githubusercontent.com/DrakeAxelrod/33726f328fa7d66f781f6408aac9c20e/raw/resume.json";



const initDoc = () => {
  return new jsPDF({
    // "pt" (points), "mm", "cm", "m", "in" or "px"
    orientation: "portrait",
    unit: "mm",
    // a0 - a10, b0 - b10, c0 - c10, dl, letter, government-letter, legal, junior-legal, ledger, tabloid, credit-card
    format: "a4",
    // Only put fonts into the PDF, which were used.
    putOnlyUsedFonts: false,
    // Compress the generated PDF.
    compress: false,
    // Precision of the element-positions.
    precision: 2,
    // Not to be confused with the base unit. Please inform yourself before you use it.
    userUnit: 1.0,
  });
}


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
