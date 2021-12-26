import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Resume from "@components/resume";
import { load_sample_resume } from "@utils/sample-resume-loader";
import type { GetStaticPaths, GetStaticProps } from "next";
import { api } from "@lib/api/local";
import useSWR from "swr";
import styles from "@styles/spinner.module.scss"


const fetcher = async (url: string) => await api.get(url).then(res => res.data);

function GetResume(username: string | string[] | undefined, placeholder: Resume) {
  const { data, error } = useSWR(`/api/github/gists/json/${username}`, fetcher);
  // console.log(data);
  if (error) return <Resume resume={placeholder} />;
  if (!data) return (
    <div className={styles.background}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
  return <Resume resume={data} />;
}

const ResumePreview: FC<any> = (props) => {
  const router = useRouter();
  const { username } = router.query;
  const PageResume = GetResume(username, props);
  return PageResume
};

export const getStaticProps: GetStaticProps = async () => {
  const sample: Resume = load_sample_resume();
  return {
    props: sample,
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 60, // in seconds
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { username: "sample" } }],
    fallback: true,
  };
};
export default ResumePreview;
