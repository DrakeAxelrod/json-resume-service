/**
 * Basic information in regards to the person the resume belongs to.
 * @category JSON Resume
 */
declare type Basics = {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: {
    address?: string;
    postalCode?: string;
    city?: string;
    countryCode?: string;
    region?: string;
  };
  profiles?: Profile[];
};

/**
 * Social Networks such as twitter, facebook, linkedin, etc.
 * @category JSON Resume
 */
declare type Profile = {
  network?: string;
  username?: string;
  url?: string;
};

/**
 * Work experience.
 * @category JSON Resume
 */
declare type WorkExperience = {
  name?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  url?: string;
};

/**
 * Volunteering experiences.
 * @category JSON Resume
 */
declare type Volunteer = {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
};

/**
 * Past and current education (universities).
 * @category JSON Resume
 */
declare type Education = {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
};

/**
 * Awards received during career, education, or any other relevant activity.
 * @category JSON Resume
 */
declare type Award = {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
};

/**
 * Published articles, papers, or anything else that would be noteworthy.
 * @category JSON Resume
 */
declare type Publication = {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
};

/**
 * Accumulated Skills.
 * @category JSON Resume
 */
declare type Skill = {
  name?: string;
  level?: string;
  keywords?: string[];
};

/**
 * Languages (in regards to communication), and level of familiarity.
 * ```json
 * {
 *  language: "English",
 *  fluency: "Native Speaker"
 * }
 * ```
 * @category JSON Resume
 */
declare type Language = {
  language?: string;
  fluency?: string;
};

/**
 * Personal Interests, helps to give a better picture of the applicant.
 * @category JSON Resume
 */
declare type Interest = {
  name?: string;
  keywords?: string[];
};

/**
 * References from colleagues, professors, managers, or even just friends.
 * @category JSON Resume
 */
declare type Reference = {
  name?: string;
  reference?: string;
};

/**
 * Projects the one has participated in or created.
 * @category JSON Resume
 */
declare type Project = {
  name?: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
};

/**
 * Json resume following the schema defined on
 * @link https://jsonresume.org/.
 * @category JSON Resume
 */


declare type Resume = {
  [index: string]: any;
  basics?: Basics;
  work?: Work[];
  volunteer?: Volunteer[];
  education?: Education[];
  awards?: Award[];
  publications?: Publication[];
  skills?: Skill[];
  languages?: Language[];
  interests?: Interest[];
  references?: Reference[];
  projects?: Project[];
};
