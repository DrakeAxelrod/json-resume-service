import { formatPhoneNumber, minimizeUrl, setHttps } from "@utils/string-parsers";
import { CountryCode } from "libphonenumber-js";
import { SectionTitle } from "./SectionTitle";
import styles from "@styles/resume.module.scss";
import { Exists } from "../Exists";
import { Link } from "./Link";

type ResumeHeaderProps = {
  resume: Resume;
};

const Title: FC<ResumeHeaderProps> = ({ resume }) => {
  return (
    <Exists exists={resume.basics?.name}>
      <h1 className={styles.title}>
        <span className={styles["first-name"]}>
          {resume.basics?.name?.split(" ")[0]}{" "}
        </span>
        <span className={styles["last-name"]}>
          {resume.basics?.name?.split(" ")[1]}
        </span>
      </h1>
    </Exists>
  );
};

export const ResumeHeader: FC<ResumeHeaderProps> = ({ resume }) => {
  return (
    <header>
      <Title resume={resume} />
      <Exists exists={resume.basics?.label}>
        <p className={styles.position}>{resume.basics?.label}</p>
      </Exists>
      <Exists exists={resume.basics?.location}>
        <p
          className={styles.location}
        >{`${resume.basics?.location?.city}, ${resume.basics?.location?.region} ${resume.basics?.location?.countryCode}`}</p>
      </Exists>
      <p className={styles.contact}>
        <Exists exists={resume.basics?.url}>
          <a
            id="icon"
            className={`${styles.icon} fas fa-link`}
            href={setHttps(resume.basics?.url)}
            target="_blank"
            rel="noreferrer"
          ></a>{" "}
          <Link>{minimizeUrl(resume.basics?.url)}</Link>
        </Exists>
        <Exists exists={resume.basics?.phone}>
          <span>
            <i id="icon" className={`${styles.icon} fas fa-phone`}></i>{" "}
            {formatPhoneNumber(
              resume.basics?.phone,
              resume.basics?.location?.countryCode as CountryCode
            )}
          </span>
        </Exists>
        <Exists exists={resume.basics?.email}>
          <span>
            <a
              id="icon"
              className={`${styles.icon} fas fa-envelope`}
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
                id="icon"
                target="_blank"
                rel="noreferrer"
                className={`${
                  styles.icon
                } fa fa-${profile.network?.toLowerCase()}`}
                href={`${profile.url}`}
                aria-label={`${profile.network}`}
              ></a>{" "}
              {profile.username}
            </span>
          );
        })}
      </p>
      <Exists exists={resume.basics?.summary}>
        <SectionTitle input={"Summary"} />
        <p className={styles.summary}>{resume.basics?.summary}</p>
      </Exists>
    </header>
  );
};
