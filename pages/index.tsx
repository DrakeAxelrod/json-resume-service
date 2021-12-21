import styles from "@styles/home.module.scss";
import { origin } from "@utils/host-info"

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>
          You must have a gist named resume.json to be able to render a resume{" "}
        </p>
        <p>
          if you go to {`${origin}/{username}`} your resume will be rendered
        </p>
      </div>
    </div>
  );
};


// const Home: FC<any> = (props: any) => {
//   return (
//     <>
//       {/* <div
//         id="resume-container"
//         dangerouslySetInnerHTML={{ __html: props.string }}
//       ></div> */}
//     </>
//   );
// }

// export const getStaticProps: GetStaticProps = async () => {
//   const user = "DrakeAxelrod";
//   const gist = "33726f328fa7d66f781f6408aac9c20e";
//   const file = "resume.json"
//   const uri = `https://gist.github.com/${user}/${gist}/raw/${file}`;
//   return {
//     props: {
//       string: render(await(await fetch(uri)).json()),
//     },
//   };
// };

export default Home
