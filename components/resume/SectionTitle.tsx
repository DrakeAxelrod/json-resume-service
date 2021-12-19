import {
  capitalize
} from "@utils/string-parsers";

export const SectionTitle: FC<{ input: String }> = ({ input }) => {
  const title = capitalize(input);
  return <h2 className="section-title">{title}</h2>;
};
