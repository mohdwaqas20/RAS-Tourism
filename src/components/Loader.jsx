import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader() {
  const [done, setDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2000)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div exit={{ opacity: 0, transition: { duration: 0.5 } }}
          style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'var(--blue-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.5rem', fontWeight: 900, color: '#fff', letterSpacing: 4 }}>
            RAS<span style={{ color: 'var(--gold)' }}>★</span>
          </div>
          <div style={{ width: 200, height: 3, background: 'rgba(255,255,255,0.15)', borderRadius: 3, overflow: 'hidden' }}>
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.8, ease: 'easeInOut' }}
              style={{ height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 3 }} />
          </div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', letterSpacing: 3, textTransform: 'uppercase', fontWeight: 600 }}>Tourism · Sharjah</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
