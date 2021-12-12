import { GetStaticProps } from "next";
import render from '../lib/json2handlebars';
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
  const user = "DrakeAxelrod";
  const gist = "33726f328fa7d66f781f6408aac9c20e";
  const file = "resume.json"
  const uri = `https://gist.github.com/${user}/${gist}/raw/${file}`;
  return {
    props: {
      string: render(await(await fetch(uri)).json()),
    },
  };
};

export default Home
