import { formatPhoneNumber } from "@utils/string-parsers";
import { SectionTitle } from "./SectionTitle";

type ResumeHeaderProps = {
  resume: Resume;
};

export const ResumeHeader: FC<ResumeHeaderProps> = ({ resume }) => {
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
