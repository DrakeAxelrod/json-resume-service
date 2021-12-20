import { SectionTitle } from "./SectionTitle";
import styles from "@styles/resume.module.scss";

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
            <span className="keywords">
              {lang.fluency ? ` - ${lang.fluency}` : ""}
            </span>
          </p>
        );
      })}
    </section>
  );
};

const InterestsSection: FC<ResumeSectionProps> = ({ name, resume }) => {
  return (
    <section className="interests">
      <SectionTitle input={name} />
      {resume.interests?.map((interest, i: number) => {
        return (
          <div key={i}>
            {interest.name}
            <span className="keywords">
              {interest.keywords ? ` - ${interest.keywords?.join(", ")}` : ""}
            </span>
          </div>
        );
      })}
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
            <h3>{ref.name}</h3>
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
      <LanguagesSection name={"languages"} resume={resume} />
      <InterestsSection name={"interests"} resume={resume} />
      <ReferencesSection name={"References"} resume={resume} />
    </footer>
  );
};
