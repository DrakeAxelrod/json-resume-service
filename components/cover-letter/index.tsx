
import { Exists } from "../Exists";
import styles from "@styles/cover-letter.module.scss";

type Props = {
};

const CoverLetter: FC<Props> = () => {
  return (
    <section className={styles["coverletter-page"]}>
      <Exists exists={[]}>
        <div className={styles.A4}>
          <article className={styles["cover-letter"]}>
          </article>
        </div>
      </Exists>
    </section>
  );
};

export default CoverLetter;
