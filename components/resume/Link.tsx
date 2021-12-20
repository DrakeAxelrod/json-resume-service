import { setHttps } from "@utils/string-parsers";
import styles from "@styles/resume.module.scss";

type LinkProps = {
  url?: string;
  children: Children;
};

export const Link: FC<LinkProps> = ({ url, children }) => {
  return (
    <a
      className={styles["plain-link"]}
      href={setHttps(url)}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

type IconLinkProps = {
  url?: string;
  icon: string;
};

export const IconLink: FC<IconLinkProps> = ({ url }) => {
  return (
    <a
      className="fas fa-envelope"
      href={`mailto: ${url}`}
      target="_blank"
      rel="noreferrer"
    />
  );
};
