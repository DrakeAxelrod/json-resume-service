import { GetStaticProps } from "next";
//import render from '@lib/json2handlebars';
import { Resume } from "@components/resume/index"
import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { defaultOrder } from "@lib/constants";

const Home: FC = () => {
  const [resume, setResume] = useState({} as Resume);
  useEffect(() => {
    // Run! Like go get some data from an API.
    const getResume = async () => {
      const { data } = await axios.get("http://localhost:3000/api/sample");
      setResume(data);
    };
    getResume();
  }, []); // [] (no params)  will ensure the useEffect only runs once.
  return (
    <>
      <Resume resume={resume} />
    </>
  );
};;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
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
