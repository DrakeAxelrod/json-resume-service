'use client'

import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Message from '@components/message'
import Resume from '@components/resume'
import Loader from '@components/loader'
import { fetchById } from '@lib/gists'

export default function Page() {
  const router = useRouter()
  const { gistId } = router.query

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchById(gistId)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [gistId])

  if (isLoading) return <Loader />
  if (error) return <Message msg={error} />
  if (data) return (<Resume resume={data} />)

  return <Message msg="NOT FOUND" />
}
