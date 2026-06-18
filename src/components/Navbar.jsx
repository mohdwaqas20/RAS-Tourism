import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa'
import { navLinks, mobileNavLinks, brand } from '../../siteData'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 5%',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,47,115,0.10)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        transition: 'all 0.35s ease',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
          {/* Logo */}
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNav('#hero') }} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <img src="./logo.JPG" alt="RAS Tourism Logo" style={{ height: 52, width: 52, objectFit: 'contain', borderRadius: 8 }} />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: '1.35rem', color: scrolled ? 'var(--blue-dark)' : '#fff', letterSpacing: 2 }}>RAS</span>
              <span style={{ fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: 3, fontWeight: 600, textTransform: 'uppercase' }}>— Tourism —</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                style={{ fontSize: '0.88rem', fontWeight: 500, color: scrolled ? 'var(--blue-dark)' : 'rgba(255,255,255,0.9)', transition: 'color 0.3s', position: 'relative' }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = scrolled ? 'var(--blue-dark)' : 'rgba(255,255,255,0.9)'}
              >{link.label}</a>
            ))}
            <motion.a href="#contact" onClick={(e) => { e.preventDefault(); handleNav('#contact') }}
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ background: 'linear-gradient(135deg,var(--blue-dark),var(--blue-mid))', color: '#fff', padding: '10px 22px', borderRadius: 50, fontSize: '0.85rem', fontWeight: 600, boxShadow: '0 4px 16px rgba(0,47,115,0.25)' }}>
              Get Consultation
            </motion.a>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(true)}
            style={{ display: 'none', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 8, background: 'none', border: 'none' }}
            className="hamburger" aria-label="Menu">
            <FaBars size={22} color={scrolled ? 'var(--blue-dark)' : '#fff'} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,47,115,0.97)',
              zIndex: 1100,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backdropFilter: 'blur(12px)',
              overflowY: 'auto',
              paddingTop: 80,
              paddingBottom: 40,
            }}>

            {/* Close Button — fixed inside overlay, above everything */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 20,
                right: 20,
                zIndex: 1200,
                background: 'rgba(255,255,255,0.15)',
                border: '2px solid rgba(255,255,255,0.5)',
                borderRadius: '50%',
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                lineHeight: 1,
              }}
              aria-label="Close menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="2" x2="18" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="18" y1="2" x2="2" y2="18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', width: '100%' }}>
              {mobileNavLinks.map((link, i) => (
                <motion.a key={link.label} href={link.href}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href) }}
                  style={{ fontSize: '1.4rem', color: '#fff', fontWeight: 600, letterSpacing: 1 }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = '#fff'}
                >{link.label}</motion.a>
              ))}
              <motion.a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '12px 28px', borderRadius: 50, fontWeight: 700, marginTop: 8 }}>
                <FaWhatsapp /> WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 880px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}