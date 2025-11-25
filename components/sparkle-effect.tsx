"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function SparkleEffect() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute animate-sparkle"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg width={sparkle.size * 4} height={sparkle.size * 4} viewBox="0 0 24 24" fill="none">
            <path d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z" fill="var(--gold)" />
          </svg>
        </div>
      ))}
    </div>
  )
}
