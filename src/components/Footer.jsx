import { motion } from 'framer-motion'
import { brand, footerQuickLinks, footerServiceLinks, socials, contactPoints } from '../../siteData'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer id="footer" style={{ background: 'var(--blue-dark)', color: 'rgba(255,255,255,0.8)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '70px 5% 50px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48 }} className="footer-top">
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <img src="./logo.JPG" alt="RAS Tourism" style={{ height: 48, width: 48, objectFit: 'contain', borderRadius: 8 }} />
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '1.2rem', fontWeight: 900, color: '#fff', letterSpacing: 2 }}>RAS</div>
              <div style={{ fontSize: '0.55rem', color: 'var(--gold)', letterSpacing: 3, fontWeight: 600 }}>— TOURISM —</div>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: 24 }}>
            Your trusted travel partner in Sharjah, UAE — delivering seamless journeys, visa solutions, and unforgettable experiences since {brand.founded}.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {socials.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener" aria-label={s.label}
                  whileHover={{ y: -3, background: 'var(--gold)' }}
                  style={{ width: 38, height: 38, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', transition: 'all 0.3s' }}>
                  <Icon size={16} />
                </motion.a>
              )
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {footerQuickLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.target.style.color = 'var(--gold)'; e.target.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.paddingLeft = '0' }}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {footerServiceLinks.map(svc => (
              <li key={svc}>
                <a href="#services" onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.target.style.color = 'var(--gold)'; e.target.style.paddingLeft = '6px' }}
                  onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.6)'; e.target.style.paddingLeft = '0' }}>
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Contact Us</h4>
          {contactPoints.map((point, i) => {
            const Icon = point.icon
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 14 }}>
                <Icon style={{ color: 'var(--gold)', marginTop: 1, flexShrink: 0 }} />
                <div style={{ fontSize: '0.83rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{point.value}</div>
              </div>
            )
          })}
        </div>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.08)', margin: '0 5%' }} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }} className="footer-bottom">
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>© {year} <span style={{ color: 'var(--gold)' }}>RAS Tourism</span>. All rights reserved.</p>
        <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)' }}>Crafted with <span style={{ color: 'var(--gold)' }}>✦</span> in Sharjah, UAE</p>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-top { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 560px) {
          .footer-top { grid-template-columns: 1fr !important; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  )
}
