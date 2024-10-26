const API = 'https://api.github.com'
const PUB_FILE = 'resume.json'

export const fetchById = gistId =>
  !gistId
    ? Promise.resolve(null)
    : /\W/.test(gistId)
      ? Promise.reject('ILLEGAL NON-WORD CHARACTERS')
      : gistId.length === 32
        ? fetch(`${API}/gists/${gistId}`)
            .then(r => (r.ok ? r.json() : Promise.reject(r.status)))
            .then(r => r.files[Object.keys(r.files).find(x => x.endsWith('.json'))].content)
            .then(JSON.parse)
        : Promise.reject('GIST_ID IS 32 CHARACTERS')

export const fetchByUsername = async username => {
  if (!username) return Promise.resolve(null)

  if (/\W/.test(username)) return Promise.reject('ILLEGAL NON-WORD CHARACTERS')

  const res = await fetch(`${API}/users/${username}/gists`)
  if (!res.ok) return Promise.reject(res.status)

  const gist = ((await res.json()) || []).find(x => Object.keys(x.files).includes(PUB_FILE))
  if (!gist) return Promise.reject(`NO_PUBLIC ${PUB_FILE}`)

  return fetchById(gist.id)
}
