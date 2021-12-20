import {
  capitalizeAll
} from "@utils/string-parsers";
import styles from "@styles/resume.module.scss"

export const SectionTitle: FC<{ input: string }> = ({ input }) => {
  const title = capitalizeAll(input);
  return (
    <>
      <h2 className={styles["section-title"]}>{title}</h2>
    </>
  );
};
