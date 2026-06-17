import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaXmark, FaCircleCheck, FaArrowRight, FaWhatsapp, FaStarOfLife, FaAngleRight } from 'react-icons/fa6'
import { services, brand } from '../../siteData'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null)
  const active = activeIndex !== null ? services[activeIndex] : null

  useEffect(() => {
    if (activeIndex === null) return
    const onKey = (e) => { if (e.key === 'Escape') setActiveIndex(null) }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [activeIndex])

  return (
    <section id="services" style={{ background: 'var(--bg)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>What We Offer</div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 20 }}>
            Premium <span style={{ color: 'var(--gold)' }}>Travel Services</span>
          </h2>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, margin: '0 auto 20px' }} />
          <p style={{ fontSize: '1.05rem', color: '#5A6478', lineHeight: 1.75 }}>From visa applications to airport pickups — we handle every aspect of your travel so you can focus on the experience.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }} className="services-grid">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                whileHover={{ y: -8 }}
                style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '36px 28px', position: 'relative', overflow: 'hidden', border: '1.5px solid rgba(0,47,115,0.06)', cursor: 'default', transition: 'all 0.35s', display: 'flex', flexDirection: 'column' }}
                className="service-card">
                <div style={{ width: 60, height: 60, borderRadius: 14, background: 'linear-gradient(135deg, rgba(0,47,115,0.08), rgba(0,95,184,0.12))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: 20 }} className="svc-icon">
                  <Icon style={{ color: 'var(--svc-icon-color, var(--blue-dark))', fontSize: '1.5rem' }} />
                </div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.05rem', fontWeight: 700, color: 'var(--svc-title-color, var(--blue-dark))', marginBottom: 10 }} className="svc-title">{svc.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--svc-desc-color, #5A6478)', lineHeight: 1.65, flexGrow: 1 }} className="svc-desc">{svc.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 18 }}>
                  {svc.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: '0.72rem', padding: '4px 12px', borderRadius: 50, background: 'var(--svc-tag-bg, var(--gray-light))', color: 'var(--svc-tag-color, var(--blue-mid))', fontWeight: 600 }} className="svc-tag">{tag}</span>
                  ))}
                </div>
                <button onClick={() => setActiveIndex(i)} className="svc-learn-more"
                  style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 22, paddingTop: 18, borderTop: '1px solid var(--svc-divider, rgba(0,47,115,0.08))', background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', fontSize: '0.85rem', fontWeight: 700, color: 'var(--svc-learnmore-color, var(--blue-dark))', width: '100%', textAlign: 'left' }}>
                  Learn More <FaArrowRight size={12} style={{ transition: 'transform 0.25s' }} className="svc-arrow" />
                </button>
              </motion.div>
            )
          })}

          {/* ── And Many More card ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, #001233 0%, #001F4E 50%, #003D85 100%)',
              padding: '36px 28px',
              display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden',
              border: '1.5px solid rgba(216,178,106,0.2)',
            }}
          >
            {/* decorative circles */}
            {[130, 80, 48].map((s, idx) => (
              <div key={idx} style={{ position: 'absolute', width: s, height: s, borderRadius: '50%', border: '1px solid rgba(216,178,106,0.15)', top: `${-10 + idx * 22}%`, right: `${-8 + idx * 12}%`, pointerEvents: 'none' }} />
            ))}
            {/* grid overlay */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '30px 30px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: 'rgba(216,178,106,0.15)', border: '1px solid rgba(216,178,106,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <FaStarOfLife style={{ color: 'var(--gold)', fontSize: '1.4rem' }} />
              </div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: 10, lineHeight: 1.25 }}>
                And Many More<br /><span style={{ color: 'var(--gold)' }}>Services</span>
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 20 }}>
                Can't find what you're looking for? We offer a wide range of travel and tourism solutions tailored to your needs — from group tours to corporate travel.
              </p>

              {/* bullet hints */}
              {['Group & Corporate Travel', 'Umrah & Pilgrimage Tours', 'Travel Insurance Assistance', 'And For more Contact Us ->'].map((item, k) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <FaAngleRight style={{ color: 'var(--gold)', fontSize: '0.75rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 10, marginTop: 28 }}>
              <a
                href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to know more about your services.")}`}
                target="_blank" rel="noopener"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '14px 20px', borderRadius: 50, fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', transition: 'opacity 0.2s' }}
                onMouseOver={e => e.currentTarget.style.opacity = '0.9'}
                onMouseOut={e => e.currentTarget.style.opacity = '1'}
              >
                <FaWhatsapp size={17} /> Chat on WhatsApp
              </a>
              <a
                href="#contact"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '14px 20px', borderRadius: 50, fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none', transition: 'background 0.2s', backdropFilter: 'blur(4px)' }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.18)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                Send an Enquiry
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      <AnimatePresence>
        {active && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
              onClick={() => setActiveIndex(null)}
              style={{ position: 'fixed', inset: 0, background: 'rgba(0,15,40,0.55)', backdropFilter: 'blur(3px)', zIndex: 2000 }}
            />
            <motion.div
              key="panel"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: 'fixed', top: 0, right: 0, bottom: 0, zIndex: 2001,
                width: 'min(480px, 100vw)', background: 'var(--white)', boxShadow: '-24px 0 60px rgba(0,15,40,0.25)',
                display: 'flex', flexDirection: 'column', overflowY: 'auto',
              }}
              role="dialog" aria-modal="true" aria-label={active.title}
            >
              {/* Image header */}
              <div style={{ position: 'relative', height: 220, flexShrink: 0, background: 'linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-mid) 55%, var(--gold) 130%)', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, opacity: 0.12, backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
                {[120, 70, 44].map((s, idx) => (
                  <div key={idx} style={{ position: 'absolute', width: s, height: s, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.25)', top: `${10 + idx * 18}%`, right: `${-6 + idx * 14}%` }} />
                ))}
                <button onClick={() => setActiveIndex(null)} aria-label="Close"
                  style={{ position: 'absolute', top: 18, right: 18, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
                  <FaXmark size={16} />
                </button>
                <div style={{ position: 'absolute', bottom: 24, left: 28, right: 28, display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, backdropFilter: 'blur(6px)' }}>
                    {(() => { const Icon = active.icon; return <Icon size={28} color="#fff" /> })()}
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: '#fff', lineHeight: 1.15 }}>{active.title}</h3>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '32px 28px 40px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '0.95rem', color: '#3A4356', lineHeight: 1.8, marginBottom: 28 }}>
                  {active.detail || active.description}
                </p>

                <div style={{ color: 'var(--gold)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>What's Included</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                  {(active.included || []).map((item, k) => (
                    <div key={k} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <FaCircleCheck size={17} style={{ color: 'var(--blue-mid)', marginTop: 2, flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#3A4356', lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
                  {active.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: '0.72rem', padding: '5px 14px', borderRadius: 50, background: 'var(--gray-light)', color: 'var(--blue-mid)', fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <a href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(`Hi! I'd like to enquire about ${active.title}.`)}`} target="_blank" rel="noopener"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#25D366', color: '#fff', padding: '15px 24px', borderRadius: 50, fontWeight: 700, fontSize: '0.92rem' }}>
                    <FaWhatsapp size={18} /> Enquire on WhatsApp
                  </a>
                  <a href="#contact" onClick={() => setActiveIndex(null)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: 'var(--gray-light)', color: 'var(--blue-dark)', padding: '15px 24px', borderRadius: 50, fontWeight: 700, fontSize: '0.92rem' }}>
                    Send an Enquiry
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .service-card:hover { box-shadow: 0 20px 60px rgba(0,47,115,0.16) !important; }
        .service-card:hover::before { opacity: 1; }
        .service-card::before {
          content: '';position:absolute;inset:0;
          background: linear-gradient(135deg, var(--blue-dark), var(--blue-mid));
          opacity: 0;transition: opacity 0.35s;border-radius: 24px;
        }
        .service-card > * { position: relative; z-index: 1; }
        .service-card:hover {
          --svc-title-color: #fff;
          --svc-desc-color: rgba(255,255,255,0.85);
          --svc-icon-color: var(--gold);
          --svc-tag-bg: rgba(200,155,75,0.25);
          --svc-tag-color: #F0D9A8;
          --svc-divider: rgba(255,255,255,0.2);
          --svc-learnmore-color: #fff;
        }
        .service-card:hover .svc-icon { background: rgba(200,155,75,0.2) !important; }
        .svc-learn-more:hover .svc-arrow { transform: translateX(4px); }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}