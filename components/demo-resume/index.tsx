import axios from "axios";
import { FC, useState, useEffect } from "react";
import styles from "@styles/resume.module.scss";
import parsePhoneNumber from "libphonenumber-js";

type SectionProps = {
  resume: Resume;
};

const capitalize = ([first, ...rest]: any) => {
  return first.toUpperCase() + rest.join("").toLowerCase();
};
const formatPhoneNumber = (input?: any) =>
  parsePhoneNumber(input || "")?.formatNational();

const SectionTitle: FC<{ input: string }> = ({ input }) => {
  return (
    <>
      <h2 className="section-title">{input}</h2>
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
            ></a>
            <span className="contact">{resume.basics?.email}</span>
          </>
        ) : null}
        {resume.basics?.profiles?.map((profile, i) => {
          return (
            <>
              <a
                key={i}
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
  return <section></section>;
};

const WorkSection: FC<SectionProps> = ({ resume }) => {
  return <section></section>;
};

// etc...

const ResumeFooter: FC<SectionProps> = ({ resume }) => {
  return (
    <footer>
      <h2>Footer</h2>
    </footer>
  );
};

export const DemoResume: FC = () => {
  const [resume, setResume] = useState({} as Resume);
  useEffect(() => {
    // Run! Like go get some data from an API.
    const getResume = async () => {
      const { data } = await axios.get("http://localhost:3000/api/dev-resume");
      setResume(data);
    };
    getResume();
  }, []); // [] (no params)  will ensure the useEffect only runs once.
  return (
    <section className={styles.resume_page}>
      <article className={`${styles.A4} ${styles.demo_resume}`}>
        <ResumeHeader resume={resume} />
        <ResumeFooter resume={resume} />
      </article>
    </section>
  );
};
