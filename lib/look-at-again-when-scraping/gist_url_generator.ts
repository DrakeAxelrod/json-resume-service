const user = "DrakeAxelrod";
const gist = "33726f328fa7d66f781f6408aac9c20e";

type GistUrl = {
  username: String;
  gistID: String;
}
export const gist_url_generator = (props: GistUrl): string => {
  return `https://gist.github.com/${props.username}/${props.gistID}/raw/resume.json`;
}
