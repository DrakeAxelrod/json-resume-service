import chrome from "chrome-aws-lambda";

// windows
const exePath =
  process.platform === "win32"
    ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
    : // linux
    process.platform === "linux"
    ? "/usr/bin/brave"
    : "/usr/bin/google-chrome"
    ? "/usr/bin/google-chrome-stable"
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

interface Options {
  args: string[];
  executablePath: string;
  headless: boolean;
}

export async function getOptions(isDev: boolean) {
  let options: Options;
  if (isDev) {
    options = {
      args: chrome.args, //[],
      executablePath: exePath,
      headless: true,
    };
  } else {
    options = {
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    };
  }
  return options;
}
