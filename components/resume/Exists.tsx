type ExistsProps = {
  exists: any;
  children: Children;
};

export const Exists: FC<ExistsProps> = ({ exists, children }) => {
  return exists && exists.length !== 0 ? <>{children}</> : null;
};
