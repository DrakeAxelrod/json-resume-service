import {
  capitalize
} from "@utils/string-parsers";
import styles from "@styles/resume.module.scss"

export const SectionTitle: FC<{ input: String }> = ({ input }) => {
  const title = capitalize(input);
  return (
    <>
      <h2 className={styles["section-title"]}>{title}</h2>
    </>
  );
};
