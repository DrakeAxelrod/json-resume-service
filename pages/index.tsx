
// export default () => (<Help />)
import styles from "@styles/home.module.scss";
import { origin } from "@utils/host-info";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p
          style={{
            color: "black",
            fontStyle: "italic",
          }}
        >
          You must have a gist named resume.json to be able to render a resume{" "}
        </p>
        <br></br>
        <ul>
          <h2
            style={{
              color: "gray",
            }}
          >Public Gists</h2>
          <li
            style={{
              marginLeft: "2rem",
              textAlign: "left",
            }}
          >
            Go to {`${origin}/user/{username}`} to render your resume
          </li>
          <h2
            style={{
              color: "gray",
            }}
          >Secret Gists</h2>
          <li
            style={{
              marginLeft: "2rem",
              textAlign: "left",
            }}
          >
            Go to {`${origin}/secret/gist/{secret}`} to render your resume
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

