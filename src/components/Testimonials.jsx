import { motion } from 'framer-motion'
import { testimonials } from '../../siteData'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]
  return (
    <section id="testimonials" style={{ background: 'var(--bg)', padding: '100px 5%', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 60px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Client Reviews</div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 20 }}>
            What Our <span style={{ color: 'var(--gold)' }}>Clients Say</span>
          </h2>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, margin: '0 auto' }} />
        </motion.div>
      </div>

      {/* Infinite scroll track */}
      <div style={{ overflow: 'hidden' }}>
        <div className="testi-slider" style={{ display: 'flex', gap: 24, width: 'max-content' }}>
          {doubled.map((t, i) => (
            <div key={i} style={{ width: 340, flexShrink: 0, background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '32px 28px', boxShadow: 'var(--shadow-sm)', border: '1.5px solid rgba(0,47,115,0.06)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '1rem', letterSpacing: 2, marginBottom: 16 }}>★★★★★</div>
              <blockquote style={{ fontSize: '0.9rem', color: '#4A5568', lineHeight: 1.75, marginBottom: 20, fontStyle: 'italic' }}>"{t.quote}"</blockquote>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue-dark), var(--blue-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#fff', fontFamily: "'Montserrat', sans-serif", flexShrink: 0 }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--blue-dark)', fontSize: '0.92rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600, marginTop: 2 }}>{t.origin}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testi-slider { animation: slide 32s linear infinite; }
        .testi-slider:hover { animation-play-state: paused; }
        @keyframes slide { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>
    </section>
  )
}
