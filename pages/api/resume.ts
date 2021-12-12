import { NextApiRequest, NextApiResponse } from "next";
// import fs from "fs";
// import path from "path";
import puppeteer from "puppeteer"
import chromium from "chrome-aws-lambda"
import { getPDF } from '../../lib/chromium';

const isDev = process.env.NODE_ENV === "development";

export const getJsonResume = async (uri: string) => {
  return await (await fetch(uri)).json();
}

export default async (_: NextApiRequest, res: NextApiResponse)  => {
  const protocol = isDev ? "http://" : "https://" 
  const uri = protocol + _.headers.host
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
