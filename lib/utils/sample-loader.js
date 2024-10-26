import { readFile } from 'node:fs/promises'

const read = name =>
  readFile('./sample-data/sample.${name}.json', { encoding: 'utf8' }).then(JSON.parse)

export const load_sample_resume = () => read('resume')

export const load_sample_coverletter = () => read('coverletter')
