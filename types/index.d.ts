// next.js's api response and request types just shortened and made globally available
export type { NextApiRequest as Req, NextApiResponse as Res } from "next";

namespace Resume { 
  export type Basics = Pick<ResumeSchema, "basics">;
  export type Skills = Pick<ResumeSchema, "skills">
  export type WorkExperiences = Pick<ResumeSchema, "skills">;
  export type WorkExperiences = Pick<ResumeSchema, "skills">;
}
