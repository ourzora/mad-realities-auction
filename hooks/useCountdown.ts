import { useCallback, useEffect, useMemo, useState } from 'react'
import { intervalToDuration } from 'date-fns'

function pad(str: Number | undefined) {
  return str ? String(str).padStart(2, '0') : '00'
}

export const useCountdown = (dateStr: string) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setReady(true)
  }, [])
  const date = useMemo(() => new Date(dateStr), [dateStr])
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  })

  const plural = useCallback((num, label) => {
    return `${num} ${label}${num === 1 ? '' : 's'}`
  }, [])

  const countdownText = useMemo(() => {
    const { weeks, days, hours, minutes, seconds } = intervalToDuration({
      start: now,
      end: date,
    })

    return [pad(days), pad(hours), pad(minutes), pad(seconds)].join(':')
  }, [date, now, plural])

  if (!dateStr) return { countdownText: false }

  return { countdownText: ready ? countdownText : '...' }
}
