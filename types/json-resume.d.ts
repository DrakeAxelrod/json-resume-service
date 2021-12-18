/**
 * Basic information in regards to the person the resume belongs to.
 * @category JSON Resume
 */
declare type Basics = {
  name?: String;
  label?: String;
  image?: String;
  email?: String;
  phone?: String;
  url?: String;
  summary?: String;
  location?: {
    address?: String;
    postalCode?: String;
    city?: String;
    countryCode?: String;
    region?: String;
  };
  profiles?: Profile[];
};

/**
 * Social Networks such as twitter, facebook, linkedin, etc.
 * @category JSON Resume
 */
declare type Profile = {
  network?: String;
  username?: String;
  url?: String;
};

/**
 * Work experience.
 * @category JSON Resume
 */
declare type WorkExperience = {
  name?: String;
  position?: String;
  url?: String;
  startDate?: String;
  endDate?: String;
  summary?: String;
  highlights?: String[];
};

/**
 * Volunteering experiences.
 * @category JSON Resume
 */
declare type Volunteer = {
  organization?: String;
  position?: String;
  url?: String;
  startDate?: String;
  endDate?: String;
  summary?: String;
  highlights?: String[];
};

/**
 * Past and current education (universities).
 * @category JSON Resume
 */
declare type Education = {
  institution?: String;
  url?: String;
  area?: String;
  studyType?: String;
  startDate?: String;
  endDate?: String;
  score?: String;
  courses?: String[];
};

/**
 * Awards received during career, education, or any other relevant activity.
 * @category JSON Resume
 */
declare type Award = {
  title?: String;
  date?: String;
  awarder?: String;
  summary?: String;
};

/**
 * Published articles, papers, or anything else that would be noteworthy.
 * @category JSON Resume
 */
declare type Publication = {
  name?: String;
  publisher?: String;
  releaseDate?: String;
  url?: String;
  summary?: String;
};

/**
 * Accumulated Skills.
 * @category JSON Resume
 */
declare type Skill = {
  name?: String;
  level?: String;
  keywords?: String[];
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
  language?: String;
  fluency?: String;
};

/**
 * Personal Interests, helps to give a better picture of the applicant.
 * @category JSON Resume
 */
declare type Interest = {
  name?: String;
  keywords?: String[];
};

/**
 * References from colleagues, professors, managers, or even just friends.
 * @category JSON Resume
 */
declare type Reference = {
  name?: String;
  reference?: String;
};

/**
 * Projects the one has participated in or created.
 * @category JSON Resume
 */
declare type Project = {
  name?: String;
  description?: String;
  highlights?: String[];
  keywords?: String[];
  startDate?: String;
  endDate?: String;
  url?: String;
  roles?: String[];
  entity?: String;
  type?: String;
};

/**
 * Json resume following the schema defined on
 * @link https://jsonresume.org/.
 * @category JSON Resume
 */
declare type Resume = {
  basics?: Basics,
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
