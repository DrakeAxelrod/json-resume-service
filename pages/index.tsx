import { GetStaticProps } from "next";
import render from '../styles';
import { getJsonResume } from './api/resume';
import { FC } from 'react';

const Home: FC<any> = (props: any) => {
  return (
    <>
      <div
        id="resume-container"
        dangerouslySetInnerHTML={{ __html: props.string }}
      ></div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      string: render(
        await getJsonResume(
          "https://gist.githubusercontent.com/DrakeAxelrod/33726f328fa7d66f781f6408aac9c20e/raw/resume.json"
        )
      ),
    },
  };
};

export default Home
