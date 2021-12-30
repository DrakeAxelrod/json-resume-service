import { capitalize, formatDate, generateDateRange, setHttps } from "@utils/string-parsers";
import { SectionTitle } from "./SectionTitle";
import styles from "@styles/resume.module.scss";
import { Link } from "./Link";
import { Exists } from "../Exists";

// helpers
type HeadingProps = {
  children: Children;
  level: 1 | 2 | 3;
};

const Heading: FC<HeadingProps> = ({ children, level }) => {
  return <h3 className={styles[`section-heading-${level}`]}>{children}</h3>;
};

type ListProps = {
  highlights?: any[];
};

const List: FC<ListProps> = ({ highlights }) => {
  return (
    <ul className={styles.list}>
      {highlights?.map((highlight: string, i: number) => {
        return <li key={i}>{capitalize(highlight)}</li>;
      })}
    </ul>
  );
};

const SkillsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="skills">
      <SectionTitle input={name} />
      {resume.skills?.map((skill, i: number) => {
        return (
          <span key={i}>
            <span>
              {i == 0 ? "| " : " | "}
              {skill.name}
              {" - "}
            </span>
            {/* <p className="familiarity">{skill.level}</p> */}
            <span className={styles.keywords}>
              {/* {" - "} */}
              {skill.keywords?.join(", ").toLowerCase()}
            </span>
            {/* {" | "} */}
          </span>
        );
      })}
    </section>
  );
};

const EducationSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="education">
      <SectionTitle input={name} />
      {resume.education?.map((edu, i: number) => {
        const dateRange = generateDateRange(edu);
        return (
          <div key={i}>
            <Heading level={1}>
              {edu.institution}{" "}
              <span className={styles.area}>
                {edu.area ? `- ${edu.area}` : ""}
                {edu.studyType ? `, ${edu.studyType}` : ""}
              </span>
            </Heading>
            <p className={styles["left-meta"]}>{dateRange}</p>
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
      {resume.work?.map((work, i: number) => {
        return (
          <div key={i}>
            <Heading level={1}>
              <Link url={work.url}>{work.name}</Link>
              {/* <span className="work-description">
                {work.description ? ` - ${work.description}` : ""}
              </span> */}
            </Heading>
            <p className={styles["left-meta"]}>
              {generateDateRange(work)}
              <span>
                <br />
                {work.location}
              </span>
            </p>
            <Heading level={2}>{work.position}</Heading>
            {/* <p className={styles["section-summary"]}>{work.summary}</p> */}
            <List highlights={work.highlights} />
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
            <Heading level={1}>
              <Link url={project.url}>{project.name}</Link>
            </Heading>
            <p className={styles["left-meta"]}>
              {generateDateRange(project)}
              <br />
              <span>
                {project.entity ? `${project.entity} - ` : ""}
                {project.type}
              </span>
            </p>
            <br />
            <Heading level={2}>{project.roles?.join(", ")}</Heading>
            {/* <p className={styles["section-summary"]}>{project.description}</p> */}
            {/* <p className={styles.keywords}>{project.keywords?.join(", ")}</p> */}
            <List highlights={project.highlights} />
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
            <Heading level={1}>{award.title}</Heading>
            <p className={styles["left-meta"]}>
              {formatDate(award.date)}
              <br />
              <span>{award.awarder}</span>
            </p>
            <p className={styles["section-summary"]}>{award.summary}</p>
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
            <Heading level={1}>
              <Link url={publication.url}>{publication.name}</Link>
            </Heading>
            <p className={styles["left-meta"]}>
              {formatDate(publication.releaseDate)}
              <br />
              <span>{publication.publisher}</span>
            </p>
            <p className={styles["section-summary"]}>{publication.summary}</p>
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
            <Heading level={1}>
              <Link url={volunteer.url}>{volunteer.organization}</Link>
            </Heading>
            <p className={styles["left-meta"]}>
              {generateDateRange(volunteer)}
            </p>
            <Heading level={2}>{volunteer.position}</Heading>
            <p className={styles["section-summary"]}>{volunteer.summary}</p>
            <List highlights={volunteer.highlights} />
          </div>
        );
      })}
    </section>
  );
};

interface ResumeFix extends Resume {
  [key: string]: any;
}
type GenericSectionProps = {
  name: string;
  resume: ResumeFix; 
};
export const Section: FC<GenericSectionProps> = ({ name, resume }) => {

  if (resume[name].length === 0) return <></>
  // if (notViable) return <></>;
  switch (name) {
    case "skills":
      return <SkillsSection name={name} resume={resume} />;
    case "education":
      return <EducationSection name={name} resume={resume} />;
    case "work":
      return <WorkSection name={name + " experience"} resume={resume} />;
    case "projects":
      return <ProjectsSection name={name} resume={resume} />;
    case "awards":
      return <AwardsSection name={name} resume={resume} />;
    case "publications":
      return <PublicationsSection name={name} resume={resume} />;
    case "volunteer":
      return <VolunteerSection name={name} resume={resume} />;
    default:
      return <></>;
  }
}
