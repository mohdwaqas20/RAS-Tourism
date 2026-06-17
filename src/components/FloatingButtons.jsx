import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa'
import { brand } from '../../siteData'

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* WhatsApp */}
      <motion.a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener" aria-label="WhatsApp"
        animate={{ boxShadow: ['0 8px 32px rgba(37,211,102,0.4)', '0 8px 48px rgba(37,211,102,0.7)', '0 8px 32px rgba(37,211,102,0.4)'] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        whileHover={{ scale: 1.12 }}
        style={{ position: 'fixed', bottom: 28, right: 28, zIndex: 998, background: '#25D366', color: '#fff', width: 60, height: 60, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FaWhatsapp size={28} />
        <div style={{ position: 'absolute', right: 70, background: 'rgba(0,0,0,0.85)', color: '#fff', fontSize: '0.78rem', padding: '6px 14px', borderRadius: 8, whiteSpace: 'nowrap', fontWeight: 600, pointerEvents: 'none' }} className="wa-tooltip">
          Chat with us!
        </div>
      </motion.a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ background: 'var(--gold)' }}
            style={{ position: 'fixed', bottom: 100, right: 28, zIndex: 997, background: 'var(--blue-dark)', color: '#fff', width: 44, height: 44, borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-md)', transition: 'background 0.3s' }}>
            <FaArrowUp size={16} />
          </motion.button>
        )}
      </AnimatePresence>

      <style>{`
        .wa-tooltip { opacity: 0; transition: opacity 0.3s; }
        a:hover .wa-tooltip { opacity: 1; }
      `}</style>
    </>
  )
}
