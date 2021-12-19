import { generateDateRange } from "@utils/string-parsers";
import { SectionTitle } from "./SectionTitle";

const SkillsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="skills-section">
      <SectionTitle input={name} />
      {resume.skills?.map((skill: Skill, i: number) => {
        return (
          <>
            <h3>{skill.name}</h3>
            {/* <p className="familiarity">{skill.level}</p> */}
            <p className="skill-keywords">
              {skill.keywords?.join(", ").toLowerCase()}
            </p>
          </>
        );
      })}
    </section>
  );
};

const EducationSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="education-section">
      <SectionTitle input={name} />
      {resume.education?.map((edu: Education, i: number) => {
        return (
          <>
            <h3>{edu.institution}</h3>
            <p className="date">{generateDateRange(edu)}</p>
            <br />
            <p className="area-of-study">
              {edu.area}, {edu.studyType}
            </p>
            <br />
            {/* <p className="courses">{edu.courses?.join(", ")}</p> */}
          </>
        );
      })}
    </section>
  );
};

const WorkSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section>
      <SectionTitle input={name} />
      {resume.work?.map((work: WorkExperience, i: number) => {
        return (
          <>
            <h3>
              <a
                className="plain-link"
                href={work.url}
                target="_blank"
                rel="noreferrer"
              >
                {work.name}
              </a>
            </h3>
            <p className="date">{generateDateRange(work)}</p>
            <br />
            <p>{work.position}</p>
            <p>{work.summary}</p>
            <ul>
              {work.highlights?.map((highlight: string, i: number) => {
                return <li>{highlight}</li>;
              })}
            </ul>
          </>
        );
      })}
    </section>
  );
};

const ProjectsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};

const AwardsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};

const PublicationsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};
const VolunteerSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};

const LanguagesSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};

const InterestsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};

const ReferencesSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <>
      <SectionTitle input={name} />
      {/* Code goes here just in case you couldn't work that out */}
    </>
  );
};

export const section = (name: string, resume: Resume) => {
  // if the resume doesn't have the section just return.
  if (resume[name].length === 0) return
  
  switch (name) {
    case "skills":
      return <SkillsSection name={name} resume={resume} />;
    case "education":
      return <EducationSection name={name} resume={resume} />;
    case "work":
      return <WorkSection name={name} resume={resume} />;
    case "projects":
      return <ProjectsSection name={name} resume={resume} />;
    case "awards":
      return <AwardsSection name={name} resume={resume} />;
    case "publications":
      return <PublicationsSection name={name} resume={resume} />;
    case "volunteer":
      return <VolunteerSection name={name} resume={resume} />;
    case "languages":
      return <LanguagesSection name={name} resume={resume} />;
    case "interests":
      return <InterestsSection name={name} resume={resume} />;
    case "references":
      return <ReferencesSection name={name} resume={resume} />;
    default:
      return;
  }
};
