import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../../siteData'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" style={{ background: 'var(--white)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>FAQ</div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 20 }}>
            Frequently Asked <span style={{ color: 'var(--gold)' }}>Questions</span>
          </h2>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((faq, i) => (
            <motion.div key={i}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ borderRadius: 'var(--radius)', border: '1.5px solid rgba(0,47,115,0.08)', overflow: 'hidden', boxShadow: open === i ? 'var(--shadow-sm)' : 'none', transition: 'box-shadow 0.3s' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: '100%', background: open === i ? 'linear-gradient(135deg, var(--blue-dark), var(--blue-mid))' : 'transparent', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 24px', cursor: 'pointer', fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', fontWeight: 600, color: open === i ? '#fff' : 'var(--blue-dark)', textAlign: 'left', gap: 16, transition: 'all 0.35s' }}>
                <span>{faq.question}</span>
                <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }}
                  style={{ flexShrink: 0, fontSize: '1rem' }}>▼</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ background: 'var(--gray-light)', overflow: 'hidden' }}>
                    <p style={{ padding: '20px 24px', fontSize: '0.9rem', color: '#5A6478', lineHeight: 1.75 }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
