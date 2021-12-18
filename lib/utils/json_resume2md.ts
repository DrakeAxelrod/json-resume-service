import json2md from "json2md";
import YAML from "yaml";

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

const section = (title: string, json: Resume) => {
  const _title = { h2: title.replace(/\b\w/g, (l) => l.toUpperCase()) };
  let data
  switch (title) {
  case "skills":
    data = json.skills ? getSkills(json.skills) : []
  case "education":
    data = json.education ? getEducation(json.education) : []
  case "work experience":
    data = json.work ? getWork(json.work) : []
  case "projects":
    data = json.projects ? getProjects(json.projects) : []
  case "awards":
    data = json.awards ? getAwards(json.awards) : []
  case "publications":
    data = json.publications ? getPublications(json.publications) : []
  case "volunteer":
    data = json.volunteer ? getVolunteer(json.volunteer) : []
  case "languages":
    data = json.languages ? getLanguages(json.languages) : []
  case "interests":
    data = json.interests ? getInterests(json.interests) : []
  case "references":
    data = json.references ? getReferences(json.references) : []
  default: 
    data = []
  }
  data.unshift(_title);
  return data;
};

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

const getSkills = (skills: Skill[]): Skill[] => {
  const data: Skill[] = [];
  return data;
};
const getEducation = (education: Education[]): Education[] => {
  const data: Education[] = [];
  return data;
};
const getWork = (Work: WorkExperience[]): WorkExperience[] => {
  const data: WorkExperience[] = [];
  return data;
};
const getProjects = (projects: Project[]): Project[] => {
  const data: Project[] = [];
  return data;
};
const getVolunteer = (volunteer: Volunteer[]): Volunteer[] => {
  const data: Volunteer[] = [];
  return data;
};
const getAwards = (awards: Award[]): Award[] => {
  const data: Award[] = [];
  return data;
};
const getPublications = (publications: Publication[]): Publication[] => {
  const data: Publication[] = [];
  return data;
};
const getLanguages = (languages: Language[]): Language[] => {
  const data: Language[] = [];
  return data;
};
const getInterests = (interests: Interest[]): Interest[] => {
  const data: Interest[] = [];
  return data;
};
const getReferences = (references: Reference[]): Reference[] => {
  const data: Reference[] = [];
  return data;
};

const defaultOrder = [
  "skills",
  "education",
  "work experience",
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
  order.forEach((key: any) => {
    template.push(section(key, json))
  })
  return json2md(template);
};
