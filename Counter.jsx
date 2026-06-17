import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function Counter({ value, suffix = '', duration = 2, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration, bounce: 0 })
  const spanRef = useRef(null)

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, value, motionValue])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = Math.round(latest).toLocaleString() + suffix
      }
    })
    return unsubscribe
  }, [spring, suffix])

  return (
    <motion.span ref={ref} className={className}>
      <span ref={spanRef}>0{suffix}</span>
    </motion.span>
  )
}