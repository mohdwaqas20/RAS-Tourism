import { motion } from 'framer-motion'
import { processSteps } from '../../siteData'

const stepEmojis = ['📞', '💬', '📄', '⚙️', '🌟']
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--white)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>How It Works</div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 20 }}>
            Your Journey, <span style={{ color: 'var(--gold)' }}>Step by Step</span>
          </h2>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, margin: '0 auto 20px' }} />
          <p style={{ fontSize: '1.05rem', color: '#5A6478', lineHeight: 1.75 }}>Our streamlined process ensures you're travel-ready with zero stress.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }} className="process-steps">
          <div className="process-line" style={{ position: 'absolute', top: 36, left: '10%', right: '10%', height: 2, background: 'linear-gradient(90deg, var(--gold), var(--blue-mid))', zIndex: 0 }} />
          {processSteps.map((step, i) => (
            <motion.div key={i}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '0 12px', position: 'relative', zIndex: 1 }}>
              <motion.div whileHover={{ scale: 1.12 }}
                style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, var(--blue-dark), var(--blue-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', marginBottom: 20, boxShadow: '0 8px 24px rgba(0,47,115,0.25)', border: '3px solid var(--white)', position: 'relative' }}>
                {stepEmojis[i]}
                <div style={{ position: 'absolute', top: -8, right: -4, width: 22, height: 22, background: 'var(--gold)', color: 'var(--blue-dark)', fontSize: '0.65rem', fontWeight: 800, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</div>
              </motion.div>
              <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.9rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 8 }}>{step.title}</h4>
              <p style={{ fontSize: '0.78rem', color: '#5A6478', lineHeight: 1.55 }}>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .process-steps { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 560px) {
          .process-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
