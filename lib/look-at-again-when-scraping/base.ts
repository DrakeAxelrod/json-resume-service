const jsonResumeURI =
  "https://gist.githubusercontent.com/DrakeAxelrod/33726f328fa7d66f781f6408aac9c20e/raw/resume.json";


export const getJsonResume = async (uri: string) => {
  return await (await fetch(uri)).json();
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
