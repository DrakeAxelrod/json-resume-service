import { getIntersectionOfTwoWordArrays } from "@lib/language"

export const getResumeSkillsKeywords = (resume: Resume) => {
  const holder: string[] = []
  resume.skills?.forEach((skill) => {
    skill?.keywords?.forEach((word: string) => holder.push(word.toLowerCase()))
  })
  return holder
}

export const getJobKeyWordsOverlap = (resume: Resume, data: any) => {
  return getIntersectionOfTwoWordArrays(getResumeSkillsKeywords(resume), data.keywords)
}
