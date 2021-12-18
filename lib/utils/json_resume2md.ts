import json2md from "json2md";
import YAML from "yaml";

// "h1"
// "h2"
// "h3"
// "h4"
// "h5"
// "h6"
// "p"
// "blockquote"
// "img"
// "ul"
// "ol"
// "hr"
// "code"
// "table"
// "link";
// data: String | Object | Array<String>;

json2md.converters.yaml = (input) => {
  return `---\n${YAML.stringify(input)}---`;
};

json2md.converters.empty = (input) => {
  return input;
};

const getMeta = (json: any) => {
  const basics = json.basics;
  const name = basics.name.split(" ");
  const data = {
    name: {
      first: name[0],
      last: name[1],
      full: basics.name,
    },
    label: basics.label,
    image: basics.image,
    location: basics.location,
    email: basics.email,
    phone: basics.phone,
    website: basics.website,
    profiles: basics.profiles,
    summary: basics.summary,
  };
  return [{ yaml: data }];
};

const getSocials = (json: any) => {
  const { basics: profiles } = json;
  const socials: any[] = [];
  profiles.forEach((profile: any) => {
    socials.push(
      json2md({ link: { title: profile.network, source: profile.url } })
    );
  });
  return socials;
};

const getHeading = (json: any): any[] => {
  const {
    basics: { name, summary },
  } = json;
  const data: any[] = [];
  // name
  data.push({ h1: name });
  // summary (probably remove this or just make optional)
  data.push({ p: summary });
  return data;
};

const section = (title: string, json: any, cb: Function) => {
  const data = cb(json);
  data.unshift({ h2: title.replace(/\b\w/g, (l) => l.toUpperCase()) });
  return data;
};

const getSkills = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getEducation = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getWork = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getProjects = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getVolunteer = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getAwards = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getPublications = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getLanguages = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getInterests = (json: any): any[] => {
  const data: any[] = [];
  return data;
};
const getReferences = (json: any): any[] => {
  const data: any[] = [];
  return data;
};

const defaultOrder = [
  "skills",
  "education",
  "work",
  "projects",
  "awards",
  "publications",
  "volunteer",
  "languages",
  "interests",
  "references",
];
export const json_resume2md = (json: any, order = defaultOrder): string => {
  console.log(json.skills);
  const meta = getMeta(json);
  const heading = getHeading(json);
  const template: any[] = [...meta, ...heading];
  const sections: { [key: string]: any } = {
    skills: section("skills", json, getSkills),
    education: section("education", json, getEducation),
    work: section("work experience", json, getWork),
    projects: section("projects", json, getProjects),
    awards: section("awards", json, getAwards),
    publications: section("publications", json, getPublications),
    volunteer: section("volunteer", json, getVolunteer),
    languages: section("languages", json, getLanguages),
    interests: section("interests", json, getInterests),
    references: section("references", json, getReferences),
  };
  order.forEach((key: any) => {
    template.push(sections[key])
  })
  return json2md(template);
};
