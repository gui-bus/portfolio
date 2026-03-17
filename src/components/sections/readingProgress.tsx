"use client"

import { motion, useScroll, useSpring } from "framer-motion"

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="reading-progress"
      style={{ scaleX }}
    />
  )
}
