import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      setProgress(scrolled * 100)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, height: 3, width: `${progress}%`, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', zIndex: 9999, transition: 'width 0.1s linear' }} />
  )
}
