import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPlane } from 'react-icons/fa'
import { brand, heroStats } from '../../siteData'

function AnimatedCounter({ target, suffix = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const duration = 2000
    const start = performance.now()
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      el.textContent = Math.round(eased * target).toLocaleString() + suffix
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, suffix])
  return <span ref={ref}>0</span>
}

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(135deg, #001F4E 0%, #002F73 40%, #004A99 70%, #005FB8 100%)',
      overflow: 'hidden'
    }}>
      {/* Animated background orbs */}
      {[
        { w: 400, h: 400, color: 'var(--gold)', top: '-100px', right: '-100px', delay: 0 },
        { w: 300, h: 300, color: 'var(--blue-mid)', bottom: '100px', left: '-80px', delay: -3 },
        { w: 200, h: 200, color: 'var(--gold-light)', top: '40%', left: '40%', delay: -5 },
      ].map((orb, i) => (
        <motion.div key={i} animate={{ y: [0, -30, 20, 0], x: [0, 20, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: orb.delay }}
          style={{ position: 'absolute', width: orb.w, height: orb.h, borderRadius: '50%', background: orb.color, filter: 'blur(40px)', opacity: 0.12, top: orb.top, right: orb.right, bottom: orb.bottom, left: orb.left }} />
      ))}

      {/* Grid overlay */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Skyline SVG */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 280 }}>
        <svg viewBox="0 0 1440 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
          <path d="M0 280 L0 220 L60 220 L60 180 L80 180 L80 140 L90 100 L100 140 L110 140 L110 180 L140 180 L140 200 L180 200 L180 160 L190 80 L200 160 L230 160 L230 200 L260 200 L260 180 L280 180 L280 120 L295 60 L310 120 L310 180 L340 180 L340 200 L380 200 L380 160 L400 160 L400 100 L430 100 L430 160 L460 160 L460 180 L500 180 L500 220 L530 220 L530 180 L550 180 L550 140 L560 90 L570 60 L580 90 L590 140 L600 180 L630 180 L630 200 L670 200 L670 170 L690 170 L690 130 L700 90 L710 130 L710 170 L740 170 L740 200 L780 200 L780 220 L820 220 L820 190 L840 190 L840 150 L860 100 L880 150 L880 190 L910 190 L910 210 L950 210 L950 185 L970 185 L970 150 L985 105 L1000 150 L1000 185 L1030 185 L1030 210 L1070 210 L1070 230 L1100 230 L1100 200 L1120 200 L1120 170 L1135 120 L1150 170 L1150 200 L1180 200 L1180 220 L1220 220 L1220 200 L1240 200 L1240 180 L1255 140 L1270 180 L1270 200 L1300 200 L1300 215 L1340 215 L1340 195 L1360 195 L1360 175 L1375 140 L1390 175 L1390 195 L1440 195 L1440 280 Z" fill="rgba(255,255,255,0.04)" />
        </svg>
      </div>

      {/* Animated airplane using FaPlane icon */}
      <motion.div
        animate={{ x: ['-120px', 'calc(100vw + 120px)'], y: [0, -40] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
        style={{ position: 'absolute', top: '15%', zIndex: 2, display: 'flex', alignItems: 'center' }}>
        {/* Contrail */}
        <div style={{ width: 160, height: 2, background: 'linear-gradient(90deg, transparent, rgba(200,155,75,0.5))', borderRadius: 2 }} />
        {/* Plane icon */}
        <FaPlane size={48} color="#C89B4B" style={{ filter: 'drop-shadow(0 4px 14px rgba(200,155,75,0.7))' }} />
      </motion.div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 3, maxWidth: 1280, margin: '0 auto', padding: '100px 5% 60px', width: '100%' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(200,155,75,0.15)', border: '1px solid rgba(200,155,75,0.35)', color: 'var(--gold-light)', padding: '7px 18px', borderRadius: 50, fontSize: '0.8rem', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 28 }}>
          <motion.span animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 7, height: 7, background: 'var(--gold)', borderRadius: '50%', display: 'inline-block' }} />
          Sharjah's Premier Travel Agency
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', fontWeight: 900, color: '#fff', lineHeight: 1.1, marginBottom: 24 }}>
          Explore Dubai &<br />
          <span style={{ color: 'var(--gold)' }}>The World With Confidence</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'rgba(255,255,255,0.75)', maxWidth: 580, lineHeight: 1.75, marginBottom: 40 }}>
          Your trusted travel partner for UAE tourism, visas, hotels, airport transfers, and international travel solutions — crafted for every journey.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 60 }}>
          <motion.a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(200,155,75,0.5)' }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'linear-gradient(135deg,var(--gold),var(--gold-light))', color: 'var(--blue-dark)', padding: '15px 32px', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 8px 32px rgba(200,155,75,0.35)' }}>
            ✦ Get Free Consultation
          </motion.a>
          <motion.a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener"
            whileHover={{ y: -3, background: 'rgba(255,255,255,0.2)' }} whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.3)', color: '#fff', padding: '15px 32px', borderRadius: 50, fontWeight: 600, fontSize: '0.95rem', backdropFilter: 'blur(8px)' }}>
            <FaWhatsapp size={18} /> WhatsApp Us
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
          {heroStats.map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--gold)', lineHeight: 1 }}>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.65)', marginTop: 4, fontWeight: 500 }}>{stat.label}</div>
              </div>
              {i < heroStats.length - 1 && <div style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.15)' }} className="stat-div" />}
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .stat-div { display: none; }
        }
      `}</style>
    </section>
  )
}