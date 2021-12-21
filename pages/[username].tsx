import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Resume } from "@components/resume";
import { load_sample_resume } from "@utils/sample-resume-loader";
import type { GetStaticPaths, GetStaticProps } from "next";
import { origin } from "@utils/host-info"
const ResumePreview: FC<any> = (props) => {
  const router = useRouter();
  const { username } = router.query;
  const [resume, setResume] = useState(props as Resume);
  useEffect(() => {
    // Run! Like go get some data from an API.
    axios.get(`https://${origin}/api/github/gists/${username}`).then(res => {
        setResume(res.data)
      }).catch(err => {
        setResume(props)
      })
  }, [username]);
  return (
    <Resume resume={resume} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const sample: Resume = load_sample_resume();
  return {
    props: sample,
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 60, // in seconds
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [ { params: { username: "sample" } } ],
    fallback: true,
  };
}
export default ResumePreview;
