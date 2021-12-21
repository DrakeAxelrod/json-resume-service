type ExistsProps = {
  exists: any;
  children: Children;
};

export const Exists: FC<ExistsProps> = ({ exists, children }) => {
  if (exists == null) return <></>;
  const notEmpty = Array.isArray(exists) ? exists.length !== 0 : true;
  return notEmpty ? <>{children}</> : <></>;
};
