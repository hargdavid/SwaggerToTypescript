export const getTypeNameFromRef = (ref: string): string => {
  const pathname = "definitions/";
  return ref.substring(ref.indexOf(pathname) + pathname.length);
};
