import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  lead,
  align = 'left',
  theme = 'light',
  className = '',
}) {
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      <Reveal variant="up">
        <span
          className={`block font-utility text-xs font-bold uppercase tracking-[0.25em] mb-3 ${
            isDark ? 'text-gold-light' : 'text-gold'
          }`}
        >
          {eyebrow}
        </span>
        <h2
          className={`font-display font-extrabold leading-[1.15] text-[clamp(1.75rem,3.4vw,2.75rem)] ${
            isDark ? 'text-white' : 'text-deep'
          }`}
        >
          {title} {highlight && <span className="text-gold">{highlight}</span>}
        </h2>
        <span
          className={`block h-1 w-14 rounded-full mt-5 mb-6 bg-gradient-to-r from-gold to-gold-light ${
            isCenter ? 'mx-auto' : ''
          }`}
        />
        {lead && (
          <p
            className={`text-[0.98rem] leading-[1.8] max-w-xl ${isCenter ? 'mx-auto' : ''} ${
              isDark ? 'text-white/75' : 'text-slate-600'
            }`}
          >
            {lead}
          </p>
        )}
      </Reveal>
    </div>
  )
}