
export const getIntersectionOfTwoWordArrays = (one: string[], two: string[]) => {
  return one.filter((value) => two.includes(value));
}
