import core from 'puppeteer-core';
import { getOptions } from './options';
let _page: core.Page | null;

export async function getPage(isDev: boolean) {
    if (_page) {
        return _page;
    }
    const options = await getOptions(isDev);
    const browser = await core.launch(options);
    _page = await browser.newPage();
    return _page;
}

export async function getPDF(uri: string, isDev: boolean) {
    const page = await getPage(isDev);
    await page.goto(uri, {waitUntil: "networkidle2"})
    await page.waitForTimeout(4000)
    await page.waitForSelector("#resume")
    await page.waitForSelector("#icon");
    const file = await page.pdf({ format: 'a4' })
    return file;
}
