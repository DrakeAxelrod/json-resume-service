import { formatPhoneNumber } from "@utils/string-parsers";
import { CountryCode } from "libphonenumber-js";
import { SectionTitle } from "./SectionTitle";
import styles from "@styles/resume.module.scss";
import { Exists } from "./Exists";
import { Link } from "./Link";

type ResumeHeaderProps = {
  resume: Resume;
};

const Title: FC<ResumeHeaderProps> = ({ resume }) => {
  return (
    <h1 className={styles.title}>
      <span className={styles["first-name"]}>
        {resume.basics?.name?.split(" ")[0]}{" "}
      </span>
      <span className={styles["last-name"]}>
        {resume.basics?.name?.split(" ")[1]}
      </span>
    </h1>
  );
};

export const ResumeHeader: FC<ResumeHeaderProps> = ({ resume }) => {
  return (
    <header>
      <Title resume={resume} />
      {/* need to define a way to this in case they dont provide this */}
      <p className={styles.position}>{resume.basics?.label}</p>
      {/* need to define a way to this in case they dont provide this */}
      <p
        className={styles.location}
      >{`${resume.basics?.location?.city}, ${resume.basics?.location?.region} ${resume.basics?.location?.countryCode}`}</p>
      <p className={styles.contact}>
        <Exists exists={resume.basics?.phone}>
          <span>
            <i className="fas fa-phone"></i>{" "}
            {formatPhoneNumber(
              resume.basics?.phone,
              resume.basics?.location?.countryCode as CountryCode
            )}
          </span>
        </Exists>
        <Exists exists={resume.basics?.email}>
          <span>
            <a
              className="fas fa-envelope"
              href={`mailto: ${resume.basics?.email}`}
              target="_blank"
              rel="noreferrer"
            ></a>{" "}
            {resume.basics?.email}
          </span>
        </Exists>
        {resume.basics?.profiles?.map((profile, i) => {
          return (
            <span key={i}>
              <a
                target="_blank"
                rel="noreferrer"
                className={`fa fa-${profile.network?.toLowerCase()}`}
                href={`${profile.url}`}
                aria-label={`${profile.network}`}
              ></a>{" "}
              {profile.username}
            </span>
          );
        })}
      </p>
      <SectionTitle input={"Summary"} />
      <Exists exists={resume.basics?.summary}>
        <p className={styles.summary}>{resume.basics?.summary}</p>
      </Exists>
    </header>
  );
};
