'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchByUsername } from '@lib/gists'
import Resume from '@components/resume'
import Loader from '@components/loader'
import Message from '@components/message'

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
  if (error) return <Message msg={error} />
  if (data) return (<Resume resume={data} />)

  return <Message msg="NOT FOUND" />
}
