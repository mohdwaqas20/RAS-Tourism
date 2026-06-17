import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { brand, contactPoints, serviceOptions } from '../../siteData'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()

    const lines = [
      '*New Enquiry from Website*',
      '',
      `*Name:* ${form.name || '-'}`,
      `*Phone:* ${form.phone || '-'}`,
      `*Email:* ${form.email || '-'}`,
      `*Service Required:* ${form.service || '-'}`,
      `*Message:* ${form.message || '-'}`,
    ]
    const text = encodeURIComponent(lines.join('\n'))
    window.open(`https://wa.me/${brand.whatsappNumber}?text=${text}`, '_blank', 'noopener')

    setSubmitted(true)
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" style={{ background: 'var(--bg)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} className="contact-grid">
          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Get In Touch</div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 20 }}>
              Let's Plan Your <span style={{ color: 'var(--gold)' }}>Dream Journey</span>
            </h2>
            <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, marginBottom: 24 }} />
            <p style={{ fontSize: '0.95rem', color: '#5A6478', lineHeight: 1.75, marginBottom: 32 }}>
              Ready to travel? Reach out via WhatsApp, call, or fill in the form and our travel experts will get back to you within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 32 }}>
              {contactPoints.map((point, i) => {
                const Icon = point.icon
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{ width: 48, height: 48, borderRadius: 12, background: 'linear-gradient(135deg, var(--blue-dark), var(--blue-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ color: '#fff', fontSize: '1.2rem' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{point.label}</div>
                      {point.href
                        ? <a href={point.href} style={{ fontSize: '0.92rem', color: 'var(--blue-dark)', fontWeight: 600, marginTop: 3, display: 'block' }}>{point.value}</a>
                        : <div style={{ fontSize: '0.92rem', color: 'var(--blue-dark)', fontWeight: 600, marginTop: 3 }}>{point.value}</div>
                      }
                    </div>
                  </div>
                )
              })}
            </div>
            <motion.a href={`https://wa.me/${brand.whatsappNumber}`} target="_blank" rel="noopener"
              whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(37,211,102,0.4)' }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#25D366', color: '#fff', padding: '14px 28px', borderRadius: 50, fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 8px 24px rgba(37,211,102,0.3)', marginBottom: 24 }}>
              <FaWhatsapp size={20} /> Chat on WhatsApp
            </motion.a>
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', height: 200, background: 'linear-gradient(135deg, #E8EDF5, #D0DBEB)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', color: '#5A6478', fontWeight: 500 }}>
              🗺️ Sharjah, United Arab Emirates
            </div>
          </motion.div>

          {/* Form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: 40, boxShadow: 'var(--shadow-md)' }}>
            <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 8 }}>Quick Enquiry</div>
            <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 24, fontSize: '1.2rem' }}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }} className="form-row">
                {['name', 'phone'].map(field => (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: 8 }}>{field === 'name' ? 'Full Name' : 'Phone Number'}</label>
                    <input type={field === 'phone' ? 'tel' : 'text'} placeholder={field === 'name' ? 'Your name' : '+971 XXXXXXXX'}
                      value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                      style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1.5px solid rgba(0,47,115,0.12)', background: 'var(--gray-light)', fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: 'var(--text)', outline: 'none' }} />
                  </div>
                ))}
              </div>
              {[
                { field: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              ].map(({ field, label, type, placeholder }) => (
                <div key={field} style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: 8 }}>{label}</label>
                  <input type={type} placeholder={placeholder} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                    style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1.5px solid rgba(0,47,115,0.12)', background: 'var(--gray-light)', fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: 'var(--text)', outline: 'none' }} />
                </div>
              ))}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: 8 }}>Service Required</label>
                <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                  style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1.5px solid rgba(0,47,115,0.12)', background: 'var(--gray-light)', fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: 'var(--text)', outline: 'none' }}>
                  <option value="">Select a service...</option>
                  {serviceOptions.map(opt => <option key={opt}>{opt}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--blue-dark)', marginBottom: 8 }}>Message</label>
                <textarea placeholder="Tell us about your travel plans, destination, dates..." rows={4}
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ width: '100%', padding: '13px 16px', borderRadius: 10, border: '1.5px solid rgba(0,47,115,0.12)', background: 'var(--gray-light)', fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', color: 'var(--text)', outline: 'none', resize: 'vertical', minHeight: 110 }} />
              </div>
              <motion.button type="submit" whileHover={{ y: -2, boxShadow: '0 16px 40px rgba(0,47,115,0.35)' }} whileTap={{ scale: 0.97 }}
                style={{ width: '100%', padding: 15, borderRadius: 50, border: 'none', cursor: 'pointer', background: submitted ? 'linear-gradient(135deg,#22c55e,#16a34a)' : 'linear-gradient(135deg, var(--blue-dark), var(--blue-mid))', color: '#fff', fontFamily: "'Poppins', sans-serif", fontSize: '1rem', fontWeight: 700, boxShadow: '0 8px 24px rgba(0,47,115,0.25)', transition: 'background 0.3s' }}>
                {submitted ? '✓ Opening WhatsApp...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
