import { useState, useEffect } from 'react'
import { getPosts, resetRequestCount } from '../api/blogApi'

export function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [retryCount, setRetryCount] = useState(0)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await getPosts()
      setPosts(data)
      setRetryCount(0)
      resetRequestCount()
    } catch (err) {
      setError(err.message)
      setRetryCount(prev => prev + 1)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const retry = () => {
    fetchPosts()
  }

  return { posts, loading, error, retry, retryCount }
}