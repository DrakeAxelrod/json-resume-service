import axios from "axios";

export const github_client = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
  },
});

export const get_gist_resume_json = async (username: string, gists: []) => {
  const result: any = gists.find((gist: any) =>
    gist.files.hasOwnProperty("resume.json")
  );
  let _data = null;
  if (username && result ? result.hasOwnProperty("id") : false) {
    const url = `https://gist.githubusercontent.com/${username}/${result.id}/raw/resume.json`;
    const { data } = await axios.get(url);
    _data = data;
  }
  return _data;
};
