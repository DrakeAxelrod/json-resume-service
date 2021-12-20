import { formatDate, generateDateRange, setHttps } from "@utils/string-parsers";
import { SectionTitle } from "./SectionTitle";

const SkillsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="skills">
      <SectionTitle input={name} />
      {resume.skills?.map((skill: Skill, i: number) => {
        return (
          <div key={i}>
            <h3>{skill.name}</h3>
            {/* <p className="familiarity">{skill.level}</p> */}
            <p className="keywords">
              {skill.keywords?.join(", ").toLowerCase()}
            </p>
          </div>
        );
      })}
    </section>
  );
};

const EducationSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="education">
      <SectionTitle input={name} />
      {resume.education?.map((edu: Education, i: number) => {
        return (
          <div key={i}>
            <h3>
              {edu.institution}{" "}
              <span className="area">
                {edu.area ? `- ${edu.area}` : ""}
                {edu.studyType ? `, ${edu.studyType}` : ""}
              </span>
            </h3>
            <p className="date">{generateDateRange(edu)}</p>
            <br />
            {/* <p className="courses">{edu.courses?.join(", ")}</p> */}
          </div>
        );
      })}
    </section>
  );
};

const WorkSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="work">
      <SectionTitle input={name} />
      {resume.work?.map((work: WorkExperience, i: number) => {
        return (
          <div key={i}>
            <h3>
              <a
                className="plain-link"
                href={setHttps(work.url)}
                target="_blank"
                rel="noreferrer"
              >
                {work.name}
              </a>
              <span className="work-description">
                {work.description ? ` - ${work.description}` : ""}
              </span>
            </h3>
            <p className="date">
              {generateDateRange(work)}
              <br />
              <span className="date">{work.location}</span>
            </p>
            <br />
            <h4>{work.position}</h4>
            <p>{work.summary}</p>
            <ul>
              {work.highlights?.map((highlight: string, i: number) => {
                return <li key={i}>{highlight}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

const ProjectsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="projects">
      <SectionTitle input={name} />
      {resume.projects?.map((project, i: number) => {
        return (
          <div key={i}>
            <h3>
              <a
                className="plain-link"
                href={setHttps(project.url)}
                target="_blank"
                rel="noreferrer"
              >
                {project.name}
              </a>
            </h3>
            <p className="date">
              {generateDateRange(project)}
              <br />
              <span className="date">
                {project.entity ? `${project.entity} - ` : ""}
                {project.type}
              </span>
            </p>
            <br />
            <h4>{project.roles?.join(", ")}</h4>
            <p>{project.description}</p>
            <ul>
              {project.highlights?.map((highlight: string, i: number) => {
                return <li key={i}>{highlight}</li>;
              })}
            </ul>
            <p className="keywords">{project.keywords?.join(", ")}</p>
          </div>
        );
      })}
    </section>
  );
};

const AwardsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="awards">
      <SectionTitle input={name} />
      {resume.awards?.map((award, i: number) => {
        return (
          <div key={i}>
            <h3>{award.title}</h3>
            <p className="date">
              {formatDate(award.date)}
              <br />
              <span className="date">{award.awarder}</span>
            </p>
            <p>{award.summary}</p>
          </div>
        );
      })}
    </section>
  );
};

const PublicationsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="publications">
      <SectionTitle input={name} />
      {resume.publications?.map((publication, i: number) => {
        return (
          <div key={i}>
            <h3>
              <a
                className="plain-link"
                href={setHttps(publication.url)}
                target="_blank"
                rel="noreferrer"
              >
                {publication.name}
              </a>
            </h3>
            <p className="date">
              {formatDate(publication.releaseDate)}
              <br />
              <span className="date">{publication.publisher}</span>
            </p>
            <p>{publication.summary}</p>
          </div>
        );
      })}
    </section>
  );
};
const VolunteerSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="volunteer">
      <SectionTitle input={name} />
      {resume.volunteer?.map((volunteer, i: number) => {
        return (
          <div key={i}>
            <h3>
              <a
                className="plain-link"
                href={setHttps(volunteer.url)}
                target="_blank"
                rel="noreferrer"
              >
                {volunteer.organization}
              </a>
            </h3>
            <p className="date">{generateDateRange(volunteer)}</p>
            <h4>{volunteer.position}</h4>
            <p>{volunteer.summary}</p>
            <ul>
              {volunteer.highlights?.map((highlight: string, i: number) => {
                return <li key={i}>{highlight}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export const section = (name: string, resume: Resume, i: number) => {
  // if the resume doesn't have the section just return.
  if (resume[name].length === 0) return;

  switch (name) {
    case "skills":
      return <SkillsSection name={name} resume={resume} key={i} />;
    case "education":
      return <EducationSection name={name} resume={resume} key={i} />;
    case "work":
      return <WorkSection name={name} resume={resume} key={i} />;
    case "projects":
      return <ProjectsSection name={name} resume={resume} key={i} />;
    case "awards":
      return <AwardsSection name={name} resume={resume} key={i} />;
    case "publications":
      return <PublicationsSection name={name} resume={resume} key={i} />;
    case "volunteer":
      return <VolunteerSection name={name} resume={resume} key={i} />;
    default:
      return;
  }
};
