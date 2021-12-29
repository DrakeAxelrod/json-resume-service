import { SectionTitle } from "./SectionTitle";
import styles from "@styles/resume.module.scss";
import { Exists } from "../Exists";

type ResumeFooterProps = {
  resume: Resume;
};

const LanguagesSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="languages">
      <SectionTitle input={name} />
      {resume.languages?.map((lang, i: number) => {
        return (
          <p key={i}>
            {lang.language}
            <span className={styles.keywords}>
              {lang.fluency ? ` - ${lang.fluency}` : ""}
            </span>
          </p>
        );
      })}
    </section>
  );
};

const InterestsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  const interests = resume.interests?.map(interest => interest.name).join(", ")
  return (
    <section className="interests">
      <SectionTitle input={name} />
      <p>{interests}</p>
      {/* {resume.interests?.map((interest, i: number) => {
        return (
          <div key={i}>
            {interest.name}
            <span className="keywords">
              {interest.keywords ? ` - ${interest.keywords?.join(", ")}` : ""}
            </span>
          </div>
        );
      })} */}
    </section>
  );
};

const ReferencesSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="references">
      <SectionTitle input={name} />
      {resume.references?.map((ref, i: number) => {
        return (
          <div key={i}>
            <h4>{ref.name}</h4>
            <p>{ref.reference}</p>
          </div>
        );
      })}
    </section>
  );
};

export const ResumeFooter: FC<ResumeFooterProps> = ({ resume }) => {
  return (
    <footer>
      <Exists exists={resume.languages}>
        <LanguagesSection name={"languages"} resume={resume} />
      </Exists>
      <Exists exists={resume.interests}>
        <InterestsSection name={"interests"} resume={resume} />
      </Exists>
      <Exists exists={resume.references}>
        <ReferencesSection name={"References"} resume={resume} />
      </Exists>
    </footer>
  );
};
