// next.js's api response and request types just shortened and made globally available
// declare type Req = import(".").NextApiRequest
// declare type Res = import(".").NextApiResponse

// react just to make imports cleaner
declare type FC<P = {}> = React.FunctionComponent<P>;
declare type Children =
  | boolean
  | ReactChild
  | ReactFragment
  | ReactPortal
  | null
  | undefined;

declare type ResumeSectionProps = {
  resume: Resume;
  name: string;
};

type Resume = import("./json-resume").ResumeSchema
type Iso8601 = import("./json-resume").Iso8601
