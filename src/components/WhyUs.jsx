import { motion } from 'framer-motion'
import { whyUs, whyUsNumbers } from '../../siteData'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function WhyUs() {
  return (
    <section id="why" style={{ background: 'var(--white)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="why-grid">
          {/* Visual panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
            style={{ background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 100%)', borderRadius: 'var(--radius-lg)', padding: '48px 40px', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(200,155,75,0.2) 0%, transparent 60%)' }} />
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: 20, position: 'relative' }}>
              Why Thousands Choose <span style={{ color: 'var(--gold)' }}>RAS Tourism</span>
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.75, position: 'relative', marginBottom: 28 }}>
              We combine local expertise with global reach — delivering personalized service, transparent pricing, and results-driven travel support every single time.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, position: 'relative' }}>
              {whyUsNumbers.map((n, i) => (
                <div key={i} style={{ textAlign: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 'var(--radius)', padding: 20, border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '2rem', fontWeight: 800, color: 'var(--gold)' }}>{n.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.65)', marginTop: 4, fontWeight: 500 }}>{n.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Feature cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {whyUs.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div key={i}
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4, boxShadow: 'var(--shadow-md)', background: 'var(--white)', borderColor: 'rgba(200,155,75,0.3)' }}
                  style={{ padding: 24, borderRadius: 'var(--radius)', background: 'var(--gray-light)', border: '1.5px solid transparent', cursor: 'default', transition: 'all 0.35s' }}>
                  <Icon style={{ fontSize: '1.8rem', color: 'var(--blue-mid)', marginBottom: 12, display: 'block' }} />
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.95rem', fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#5A6478', lineHeight: 1.6 }}>{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
