// pages/api/index.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Req, Res } from "types";
// import fs from "fs";
import { getPDF } from "@api/puppeteer";

const isDev = process.env.NODE_ENV === "development";

const handler = async (req: Req, res: Res) => {
  const username = req.query.username
  const protocol = isDev ? "http://" : "https://";
  const uri = protocol + req.headers.host + `/${username}`;
  // console.log(uri);
  try {
    const file = await getPDF(uri, isDev);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", "attachment; filename=dummy.pdf");
    res.setHeader("Content-Length", file.length);
    res.end(file);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Internal Error</h1><p>Sorry, there was a problem</p>");
    console.error(e);
  }
}

export default handler;
