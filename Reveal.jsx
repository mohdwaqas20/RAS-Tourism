import { motion } from 'framer-motion'

const variants = {
  up: { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  left: { hidden: { opacity: 0, x: -36 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 36 }, visible: { opacity: 1, x: 0 } },
  scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
}

/**
 * Fade/slide-in wrapper triggered once a section scrolls into view.
 * Usage: <Reveal delay={0.1}><Card /></Reveal>
 */
export default function Reveal({
  children,
  as = 'div',
  variant = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
  amount = 0.2,
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants[variant]}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  )
}