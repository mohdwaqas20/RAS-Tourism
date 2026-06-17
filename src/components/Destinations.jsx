import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowRight, FaStarOfLife, FaAngleRight } from 'react-icons/fa6'
import { brand } from '../../siteData'

const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }

const destinations = [
  {
    id: 'dubai',
    name: 'Dubai',
    region: 'United Arab Emirates',
    tag: 'Most Popular',
    tagColor: 'var(--gold)',
    desc: 'Iconic skylines, desert safaris, luxury malls and world-class hospitality.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    span: true,
  },
  {
    id: 'abudhabi',
    name: 'Abu Dhabi',
    region: 'UAE Capital',
    tag: null,
    desc: 'Grand Mosque, cultural districts, and serene Corniche by the sea.',
    image: 'https://images.unsplash.com/photo-1603190287605-e6ade32fa852?w=600&q=80',
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    region: 'Cultural Capital',
    tag: null,
    desc: 'Museums, heritage areas and the cultural heart of the UAE.',
    image: 'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=600&q=80',
  },
  {
    id: 'europe',
    name: 'Europe',
    region: 'Schengen Zone',
    tag: 'Schengen Visa',
    tagColor: '#3B82F6',
    desc: 'Iconic capitals, alpine scenery and centuries of history await.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
  },
]

function DestCard({ dest, index }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`dest-card ${dest.span ? 'dest-span' : ''}`}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        gridRow: dest.span ? 'span 2' : undefined,
      }}
    >
      {/* Photo */}
      <img
        src={dest.image}
        alt={dest.name}
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
        className="dest-img"
      />
      {/* gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,12,40,0.92) 0%, rgba(0,12,40,0.35) 55%, transparent 100%)' }} />

      {/* content */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: dest.span ? '28px 24px' : '20px 18px' }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: dest.span ? '1.4rem' : '1rem', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{dest.name}</div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,210,120,0.9)', fontWeight: 600, marginTop: 3, letterSpacing: 0.4 }}>{dest.region}</div>
        {dest.span && (
          <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.6, marginTop: 8, marginBottom: 0 }}>{dest.desc}</p>
        )}
        {dest.tag && (
          <span style={{ display: 'inline-block', background: dest.tagColor || 'var(--gold)', color: dest.tagColor === '#3B82F6' ? '#fff' : 'var(--blue-dark)', fontSize: '0.62rem', fontWeight: 700, padding: '3px 10px', borderRadius: 50, marginTop: 8, letterSpacing: 0.5 }}>
            {dest.tag}
          </span>
        )}
      </div>
    </motion.div>
  )
}

export default function Destinations() {
  return (
    <section id="destinations" style={{ background: 'var(--bg)', padding: '100px 5%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 60px' }}>
          <div style={{ color: 'var(--gold)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Where We Take You</div>
          <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: 'var(--blue-dark)', marginBottom: 20 }}>
            Popular <span style={{ color: 'var(--gold)' }}>Destinations</span>
          </h2>
          <div style={{ width: 60, height: 4, background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: 4, margin: '0 auto 20px' }} />
          <p style={{ fontSize: '1.05rem', color: '#5A6478', lineHeight: 1.75 }}>
            From the golden deserts of the UAE to the iconic cities of Europe, discover your next adventure with RAS Tourism.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="dest-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {destinations.map((dest, i) => (
            <DestCard key={dest.id} dest={dest} index={i} />
          ))}

          {/* ── And Many More card ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
            style={{
              borderRadius: 20,
              background: 'linear-gradient(145deg, #001233 0%, #001F4E 45%, #003D85 100%)',
              padding: '32px 26px',
              display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden',
              border: '1.5px solid rgba(216,178,106,0.2)',
            }}
          >
            {/* decorative rings */}
            {[140, 90, 52].map((s, idx) => (
              <div key={idx} style={{ position: 'absolute', width: s, height: s, borderRadius: '50%', border: '1px solid rgba(216,178,106,0.14)', top: `${-12 + idx * 20}%`, right: `${-10 + idx * 10}%`, pointerEvents: 'none' }} />
            ))}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)', backgroundSize: '28px 28px', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', zIndex: 1, flexGrow: 1 }}>
              <div style={{ width: 54, height: 54, borderRadius: 14, background: 'rgba(216,178,106,0.15)', border: '1px solid rgba(216,178,106,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <FaStarOfLife style={{ color: 'var(--gold)', fontSize: '1.3rem' }} />
              </div>
              <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.15rem', fontWeight: 800, color: '#fff', marginBottom: 8, lineHeight: 1.25 }}>
                And Many More<br /><span style={{ color: 'var(--gold)' }}>Destinations</span>
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: 18 }}>
                We craft journeys to dozens of destinations worldwide — from Southeast Asia to the Americas.
              </p>
              {['Turkey & Georgia', 'Maldives & Sri Lanka', 'Thailand & Bali', 'USA & Canada'].map((item, k) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 9 }}>
                  <FaAngleRight style={{ color: 'var(--gold)', fontSize: '0.7rem', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.72)', fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 9, marginTop: 24 }}>
              <a
                href={`https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent("Hi! I'd like to know more about your destinations.")}`}
                target="_blank" rel="noopener"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, background: '#25D366', color: '#fff', padding: '13px 18px', borderRadius: 50, fontWeight: 700, fontSize: '0.83rem', textDecoration: 'none' }}
              >
                <FaWhatsapp size={16} /> Chat on WhatsApp
              </a>
              <a
                href="#contact"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff', padding: '13px 18px', borderRadius: 50, fontWeight: 700, fontSize: '0.83rem', textDecoration: 'none' }}
              >
                Send an Enquiry <FaArrowRight size={11} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .dest-card { aspect-ratio: 3/4; }
        .dest-span { aspect-ratio: auto !important; }
        .dest-card:hover .dest-img { transform: scale(1.07); }
        .dest-card:hover { box-shadow: 0 24px 60px rgba(0,20,60,0.35) !important; }

        @media (max-width: 1100px) {
          .dest-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .dest-span { grid-row: span 1 !important; aspect-ratio: 3/4 !important; }
        }
        @media (max-width: 720px) {
          .dest-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .dest-span { grid-row: span 1 !important; aspect-ratio: 3/4 !important; }
        }
        @media (max-width: 420px) {
          .dest-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}