import { useState, useEffect } from 'react'
import { getMetrics } from '../api/contactApi'

export function useContactMetrics() {
  const [metrics, setMetrics] = useState({
    success: 0,
    failed: 0,
    avgLatency: 0,
    successRate: 0,
    queue: 0
  })

  const refresh = () => {
    setMetrics(getMetrics())
  }

  useEffect(() => {
    refresh()

    const interval = setInterval(refresh, 2000)
    return () => clearInterval(interval)
  }, [])

  return { metrics, refresh }
}
