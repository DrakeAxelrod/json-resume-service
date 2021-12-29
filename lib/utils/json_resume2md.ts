import { defaultOrder } from "@lib/constants";
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
  switch (title) {
    case "skills":
      return json.skills ? getSkills(_title, json.skills) : [];
    case "education":
      return json.education ? getEducation(_title, json.education) : [];
    case "work experience":
      return json.work ? getWork(_title, json.work) : [];
    case "projects":
      return json.projects ? getProjects(_title, json.projects) : [];
    case "awards":
      return json.awards ? getAwards(_title, json.awards) : [];
    case "publications":
      return json.publications
        ? getPublications(_title, json.publications)
        : [];
    case "volunteer":
      return json.volunteer ? getVolunteer(_title, json.volunteer) : [];
    case "languages":
      return json.languages ? getLanguages(_title, json.languages) : [];
    case "interests":
      return json.interests ? getInterests(_title, json.interests) : [];
    case "references":
      return json.references ? getReferences(_title, json.references) : [];
    default:
      return [];
  }
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

const getSkills = (title: any, skills: any[]) => {
  const data: any[] = [];
  skills.forEach((skill) => {
    data.push({ h3: `${skill.name} - ${skill.level}` });
    if (skill.keywords) data.push({ ul: skill.keywords });
  });
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
// "education": [{
//   "institution": "University",
//   "url": "https://institution.com/",
//   "area": "Software Development",
//   "studyType": "Bachelor",
//   "startDate": "2011-01-01",
//   "endDate": "2013-01-01",
//   "score": "4.0",
//   "courses": [
//     "DB1101 - Basic SQL"
//   ]
const getEducation = (title: any, educations: any[]): any[] => {
  const data: any[] = [];
  const edu = (education: any) => {
    if (education.url)
      return json2md({
        link: { title: education.institution, source: education.url },
      });
    else
      return education.institution
  };
  educations.forEach((education) => {
    data.push({
      h3: edu(education),
    });
    data.push(
      `${education.area}, ${education.studyType} - ${education.startDate} to ${education.endDate}`
    );
    data.push({ ul: education.courses });
  });

  data.length > 0 ? data.unshift(title) : null;
  return data;
};

// stuff below still need to be populated

const getWork = (title: any, workExperiences: any[]): any[] => {
  const data: any[] = [];
  workExperiences.forEach((experience) => {
    data.push({ h3: `${experience.name} - ${experience.position}`})
  })
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getProjects = (title: any, projects: any[]): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getVolunteer = (title: any, volunteer: any[]): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getAwards = (title: any, awards: any[]): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getPublications = (
  title: any,
  publications: any[]
): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getLanguages = (title: any, languages: any[]): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getInterests = (title: any, interests: any[]): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};
const getReferences = (title: any, references: any[]): any[] => {
  const data: any[] = [];
  data.length > 0 ? data.unshift(title) : null;
  return data;
};

export const json_resume2md = (json: any, order = defaultOrder): string => {
  const meta = getMeta(json);
  const heading = getHeading(json);
  const template: any[] = [...meta, ...heading];
  order.forEach((key: any) => {
    template.push(...section(key, json));
  });
  return json2md(template);
};
