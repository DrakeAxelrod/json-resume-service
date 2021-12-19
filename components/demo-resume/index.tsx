import axios from "axios";
import { FC, useState, useEffect } from "react";
import styles from "@styles/resume.module.scss";
import parsePhoneNumber from "libphonenumber-js";
import { defaultOrder } from "@lib/constants";

type SectionProps = {
  resume: Resume;
};

const capitalize = ([first, ...rest]: any) => {
  return first.toUpperCase() + rest.join("").toLowerCase();
};
const formatPhoneNumber = (input?: any) =>
  parsePhoneNumber(input || "")?.formatNational();

const SectionTitle: FC<{ input: String }> = ({ input }) => {
  const title = capitalize(input);
  return (
    <>
      <h2 className="section-title">{title}</h2>
    </>
  );
};
const ResumeHeader: FC<SectionProps> = ({ resume }) => {
  return (
    <header>
      <h1>
        <span className="first-name">
          {resume.basics?.name?.split(" ")[0]}{" "}
        </span>
        <span className="last-name">{resume.basics?.name?.split(" ")[1]}</span>
      </h1>
      {/* need to define a way to this in case they dont provide this */}
      <p className="position">{resume.basics?.label}</p>
      {/* need to define a way to this in case they dont provide this */}
      <p className="location">{`${resume.basics?.location?.city}, ${resume.basics?.location?.region} ${resume.basics?.location?.countryCode}`}</p>
      <p className="contact-details">
        {resume.basics?.phone ? (
          <>
            <i className="fas fa-phone"></i>
            <span className="contact">
              {formatPhoneNumber(resume.basics?.phone)}
            </span>
          </>
        ) : null}
        {resume.basics?.email ? (
          <>
            <a
              className="fas fa-envelope"
              href={`mailto: ${resume.basics?.email}`}
              target="_blank"
              rel="noreferrer"
            ></a>
            <span className="contact">{resume.basics?.email}</span>
          </>
        ) : null}
        {resume.basics?.profiles?.map((profile, i) => {
          return (
            <>
              <a
                key={i}
                target="_blank"
                rel="noreferrer"
                className={`fa fa-${profile.network}`}
                href={`${profile.url}`}
                aria-label={`${profile.network}`}
              ></a>
              <span className="contact" key={i}>
                {profile.username}
              </span>
            </>
          );
        })}
      </p>
      <SectionTitle input={"Summary"} />
      {resume.basics?.summary ? (
        <p className="summary">{resume.basics?.summary}</p>
      ) : null}
    </header>
  );
};

const SkillsSection: FC<SectionProps> = ({ resume }) => {
  return (
  <section className="skills-section">
    {resume.skills?.map((skill: Skill, i: number) => {
      return (
        <>
          <h3>
            {skill.name}
          </h3>
          {/* <p className="familiarity">{skill.level}</p> */}
          <p className="skill-keywords">{skill.keywords?.join(", ").toLowerCase()}</p>
        </>
      );
    })}
  </section>
  );
};

const EducationSection: FC<SectionProps> = ({ resume }) => {
  return (
    <section className="skills-section">
      {resume.education?.map((edu: Education, i: number) => {
        return (
          <>
            <h3>{edu.institution}</h3>
            <p className="float-left">
              {edu.startDate}
              {" - "}
              {edu.endDate}
            </p>
            <br />
            <p className="area-of-study">{edu.area}, {edu.studyType}</p>
            <br />
            {/* <p className="courses">{edu.courses?.join(", ")}</p> */}
          </>
        );
      })}
    </section>
  );
};

const WorkSection: FC<SectionProps> = ({ resume }) => {
  return (
  <section>
    {resume.work?.map((work: WorkExperience, i: number) => {
      return (
        <>
          <h3>
            <a className="plain-link" href={work.url} target="_blank" rel="noreferrer">
              {work.name}
            </a>
          </h3>
          <p className="float-left">
            {work.startDate}
            {" - "}
            {work.endDate}
          </p>
          <br />
          <p>{work.position}</p>
          <p>{work.summary}</p>
          <ul>
            {work.highlights?.map((highlight: string, i: number) => {
              return <li>{highlight}</li>
            })}
          </ul>
        </>
      );
    })}
  </section>
  );
};

const section = (name: string, resume: Resume) => {
  switch (name) {
    case "skills":
      return (
        <>
          <SectionTitle input={name} />
          <SkillsSection resume={resume} />
        </>
      );
    case "education":
      return (
        <>
          <SectionTitle input={name} />
          <EducationSection resume={resume} />
        </>
      );
    case "work":
      return (
        <>
          <SectionTitle input={name} />
          <WorkSection resume={resume} />
        </>
      );
    case "projects":
      // return (
      //   <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    case "awards":
      // return (
      //   <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    case "publications":
      // return (
      //   <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    case "volunteer":
      // return (
      //    <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    case "languages":
      // return (
      //   <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    case "interests":
      // return (
      //   <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    case "references":
      // return (
      //   <>
      //     <SectionTitle input={name} />
      //     <SkillsSection resume={resume} />
      //   </>
      // );
    default:
      return;
  }
};

const ResumeFooter: FC<SectionProps> = ({ resume }) => {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
};

const Sections: FC<SectionProps> = ({ resume }) => {
  const sections = defaultOrder.map((_section: any, i: number) => {
    return section(_section, resume);
  });
  const resume_keys  = Object.keys(resume)
  const relevant_sections = defaultOrder.filter(e => resume_keys.includes(e))
  return (
    <>
      {relevant_sections.map((_section: any, i: number) => {
        return section(_section, resume);
      })}
    </>
  );
};

export const DemoResume: FC<{ resume: Resume }> = ({ resume }) => {
  return (
    <section className={styles.resume_page}>
      <article className={`${styles.A4} ${styles.demo_resume}`}>
        <ResumeHeader resume={resume} />
        <Sections resume={resume} />
        <ResumeFooter resume={resume} />
      </article>
    </section>
  );
};
