import { faEnvelope, faLink, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { formatPhoneNumber, minimizeUrl, setHttps } from "@utils/string-parsers";
// import { CountryCode } from "libphonenumber-js";
import styles from "@styles/resume.module.scss";
import { Exists } from "../Exists";
import { Link } from "./Link";
import { SectionTitle } from "./SectionTitle";

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
            className={`${styles.icon}`}
            href={setHttps(resume.basics?.url)}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              fill: "black",
              color: "black",
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          ><FontAwesomeIcon icon={faLink} /></a>
          <Link>{minimizeUrl(resume.basics?.url)}</Link>
        </Exists>
        <Exists exists={resume.basics?.phone}>
          <span>
          <a
            className={`${styles.icon}`}
            href={`tel: ${resume.basics?.phone}`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              fill: "black",
              color: "black",
              alignSelf: "center",
              justifySelf: "center",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
            {formatPhoneNumber(resume.basics?.phone)}
          </span>
        </Exists>
        <Exists exists={resume.basics?.email}>
          <span>
            <a
              className={`${styles.icon}`}
              href={`mailto: ${resume.basics?.email}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                fill: "black",
                color: "black",
                alignSelf: "center",
                justifySelf: "center",
                textAlign: "center",
                verticalAlign: "middle",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            {resume.basics?.email}
          </span>
        </Exists>
        {resume.basics?.profiles?.map((profile, i) => {
          return (
            <span key={i}>
              <a
                target="_blank"
                rel="noreferrer"
                className={`${styles.icon}`}
                href={`${profile.url}`}
                aria-label={`${profile.network}`}
                style={{
                  display: "inline-block",
                  fill: "black",
                  color: "black",
                  alignSelf: "center",
                  justifySelf: "center",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                <FontAwesomeIcon icon={faLink} />
                </a>
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
