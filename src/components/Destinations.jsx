import { useState } from 'react'
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
    image: './Destination_1.jpg',
    span: true,
  },
  {
    id: 'abudhabi',
    name: 'Abu Dhabi',
    region: 'UAE Capital',
    tag: null,
    desc: 'Grand Mosque, cultural districts, and serene Corniche by the sea.',
    image: './Destination_2.jpg',
  },
  {
    id: 'sharjah',
    name: 'Sharjah',
    region: 'Cultural Capital',
    tag: null,
    desc: 'Museums, heritage areas and the cultural heart of the UAE.',
    image: './Destination_3.jpg',
  },
  {
    id: 'rak',
    name: 'Ras Al Khaimah',
    region: 'Adventure Capital',
    tag: null,
    desc: 'Jagged mountains, pristine beaches and thrilling outdoor adventures.',
    image: './Destination_4.jpg',
  },
  {
    id: 'uaq',
    name: 'Umm Al Quwain',
    region: 'Hidden Gem of UAE',
    tag: null,
    desc: 'Tranquil lagoons, mangroves and authentic Emirati heritage.',
    image: './Destination_5.jpeg',
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
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className={`dest-card ${dest.span ? 'dest-span' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        gridRow: dest.span ? 'span 2' : undefined,
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.45s ease',
        boxShadow: hovered ? '0 28px 70px rgba(0,20,60,0.42)' : '0 4px 20px rgba(0,20,60,0.12)',
        zIndex: hovered ? 2 : 1,
      }}
    >
      {/* Photo */}
      <img
        src={dest.image}
        alt={dest.name}
        loading="lazy"
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s ease, filter 0.5s ease',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          filter: hovered ? 'brightness(1) saturate(1.1)' : 'brightness(0.72) saturate(0.85)',
        }}
      />

      {/* gradient overlay — lightens on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: hovered
          ? 'linear-gradient(to top, rgba(0,12,40,0.88) 0%, rgba(0,12,40,0.18) 50%, transparent 100%)'
          : 'linear-gradient(to top, rgba(0,12,40,0.95) 0%, rgba(0,12,40,0.55) 55%, rgba(0,12,40,0.2) 100%)',
        transition: 'background 0.5s ease',
      }} />

      {/* content */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: dest.span ? '28px 24px' : '20px 18px',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'transform 0.4s ease',
      }}>
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
  const [moreHovered, setMoreHovered] = useState(false)

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
            onMouseEnter={() => setMoreHovered(true)}
            onMouseLeave={() => setMoreHovered(false)}
            style={{
              borderRadius: 20,
              background: 'linear-gradient(145deg, #001233 0%, #001F4E 45%, #003D85 100%)',
              padding: '32px 26px',
              display: 'flex', flexDirection: 'column',
              position: 'relative', overflow: 'hidden',
              border: moreHovered ? '1.5px solid rgba(216,178,106,0.5)' : '1.5px solid rgba(216,178,106,0.2)',
              transform: moreHovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.45s ease, border 0.3s ease',
              boxShadow: moreHovered ? '0 28px 70px rgba(0,20,60,0.42)' : '0 4px 20px rgba(0,20,60,0.12)',
              zIndex: moreHovered ? 2 : 1,
              cursor: 'pointer',
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
              {['Oman', 'Qatar', 'Azerbaijan', 'To Know More Contact Us ->'].map((item, k) => (
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