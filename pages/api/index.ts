// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
import { getPDF } from "../../lib/api/puppeteer";

const isDev = process.env.NODE_ENV === "development";

export default async function (_: NextApiRequest, res: NextApiResponse) {
  const protocol = isDev ? "http://" : "https://" 
  const uri = protocol + _.headers.host + `/${_.query.username}`
//   console.log(uri)
    try {
        const file = await getPDF(uri, isDev);
        res.statusCode = 200;
        res.setHeader('Content-Type',"application/pdf");
        // res.setHeader("Content-Disposition", "attachment; filename=dummy.pdf");
        res.setHeader('Content-Length', file.length)
        res.end(file);
    } catch (e) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Internal Error</h1><p>Sorry, there was a problem</p>');
        console.error(e);
    }
}
