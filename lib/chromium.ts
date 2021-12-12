import core from 'puppeteer-core';
import { getOptions } from './options';
let _page: core.Page | null;

async function getPage(isDev: boolean) {
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
    await page.goto(uri, {waitUntil: "networkidle0"})
    const file = await page.pdf({ format: 'a4' })
    return file;
}
