'use client'

import Loader from '@components/loader'
import Message from '@components/message'
import Resume from '@components/resume'
import { fetchByUsername } from '@lib/gists'
import styles from '@styles/message.module.scss'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Page() {
  const router = useRouter()
  const { username } = router.query

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchByUsername(username)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [username])

  if (isLoading) return <Loader />
  if (error) return <div className={styles.container}><Message msg={error} /></div>
  if (data) return (<Resume resume={data} />)
  return <div className={styles.container}><Message msg="NOT FOUND" /></div>
}
