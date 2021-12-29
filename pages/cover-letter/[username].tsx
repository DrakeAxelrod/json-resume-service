import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import CoverLetter from "@components/cover-letter";
import { load_sample_coverletter } from "@utils/sample-loader";
import type { GetStaticPaths, GetStaticProps } from "next";
import { api } from "@lib/api/local";
import useSWR from "swr";
import styles from "@styles/spinner.module.scss";

const fetcher = async (url: string) =>
  await api.get(url).then((res) => res.data);

function GetCoverLetter(
  username: string | string[] | undefined,
  placeholder: any
) {
  const { data, error } = useSWR(`/api/github/gists/json/${username}`, fetcher);
  // console.log(data);
  if (error) return <CoverLetter />;
  if (!data)
    return (
      <div className={styles.background}>
        <div className={styles.loading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  return <CoverLetter />;
}

const CoverLetterPreview: FC<any> = (props) => {
  const router = useRouter();
  const { username } = router.query;
  const PageCoverLetter = GetCoverLetter(username, props);
  return PageCoverLetter;
};

export const getStaticProps: GetStaticProps = async () => {
  // const sample: Resume = load_sample_coverletter();
  return {
    props: {},
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
export default CoverLetterPreview;
