import styles from "@styles/resume.module.scss";
import { defaultOrder } from "@lib/constants";
import { ResumeHeader } from "./ResumeHeader";
import { section } from "./Sections";
import { ResumeFooter } from "./ResumeFooter"

type Props = { 
  resume: Resume;
  order: string[];
}

export const Resume: FC<Props> = ({ resume, order=defaultOrder }) => {
  const keys = Object.keys(resume);
  const sections = order
    .filter((e) => keys.includes(e))
    .map((e) => section(e, resume));
  return (
    <section className={styles.resume_page}>
      <article className={`${styles.A4} ${styles.resume}`}>
        <ResumeHeader resume={resume} />
        {sections}
        <ResumeFooter resume={resume} />
      </article>
    </section>
  );
};
