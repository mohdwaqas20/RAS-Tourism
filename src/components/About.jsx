import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlane } from 'react-icons/fa6'
import { aboutStats } from '../../siteData'

function Counter({ target, suffix = '', raw = false }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 2000
        const start = performance.now()
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setVal(Math.round(eased * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target])
  return <span ref={ref}>{raw ? val.toString() : val.toLocaleString()}{suffix}</span>
}

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--white)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="about-grid">

          {/* Visual — order: 1 on desktop, 2 on mobile */}
          <motion.div
            className="about-visual"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
              {/* Video fills the card — clean, no overlays */}
              <video
                src="./about.MP4"
                autoPlay
                muted
                loop
                playsInline
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* 10+ badge */}
            <div className="about-badge" style={{ position: 'absolute', bottom: -24, right: -24, background: 'var(--white)', borderRadius: 'var(--radius)', padding: '20px 28px', boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
              <div className="badge-num" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2.2rem', fontWeight: 900, color: 'var(--blue-dark)', lineHeight: 1 }}>10+</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--gold)', fontWeight: 600, marginTop: 4, textAlign: 'center' }}>Years of<br />Excellence</div>
            </div>
          </motion.div>

          {/* Text — order: 2 on desktop, 1 on mobile */}
          <motion.div
            className="about-text"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>About RAS Tourism</div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', lineHeight: 1.2, marginBottom: 20 }}>
              Your Trusted Travel <span style={{ color: 'var(--gold)' }}>Partner in Sharjah</span>
            </h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, marginBottom: 24 }} />
            <p style={{ color: '#5A6478', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 16 }}>
              RAS Tourism is the trading name of <strong>Rukn Al Suraj Tourism Trips Organizing L.L.C</strong>, a licensed travel and tourism company based in Sharjah, United Arab Emirates. We provide comprehensive travel and tourism services including UAE tourism packages, flight tickets, visa assistance, hotel bookings, airport transfers, and Schengen visa solutions.
            </p>
            <p style={{ color: '#5A6478', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: 36 }}>
              Our goal is to make every journey smooth, comfortable, and completely hassle-free — from the moment you plan your trip to the moment you arrive home.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="stat-grid">
              {aboutStats.map((s, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                  style={{ background: 'var(--gray-light)', borderRadius: 'var(--radius)', padding: 24, cursor: 'default', transition: 'all 0.3s' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--blue-dark)' }}>
                    <Counter target={s.value} raw={s.label === 'License No.'} /><span style={{ fontSize: '1rem', color: 'var(--gold)' }}>{s.suffix}</span>
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#5A6478', marginTop: 4, fontWeight: 500 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tagline — shown below stats on desktop */}
            <p className="about-tagline" style={{ marginTop: 32, fontSize: '1.05rem', fontWeight: 700, color: 'var(--blue-dark)', letterSpacing: 0.3 }}>
              Trusted by thousands across the <span style={{ color: 'var(--gold)' }}>UAE &amp; beyond.</span>
            </p>
          </motion.div>

        </div>
      </div>
      <style>{`
        /* Desktop: visual left, text right */
        .about-visual { order: 1; }
        .about-text   { order: 2; }

        @media (max-width: 880px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          /* On mobile: text first, video last */
          .about-text   { order: 1; }
          .about-visual { order: 2; margin-top: 16px; }
          .stat-grid { grid-template-columns: 1fr 1fr !important; }
          /* Hide tagline on mobile (video is below, so tagline isn't needed above it) */
          .about-tagline { display: none; }
          .about-badge { bottom: -18px !important; right: -10px !important; padding: 14px 18px !important; }
          .about-badge .badge-num { font-size: 1.7rem !important; }
        }
        @media (max-width: 480px) {
          .about-grid { gap: 36px !important; }
          .about-badge { bottom: -14px !important; right: -6px !important; padding: 10px 14px !important; }
          .about-badge .badge-num { font-size: 1.4rem !important; }
        }
      `}</style>
    </section>
  )
}