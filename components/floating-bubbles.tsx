"use client"

import { useEffect, useState } from "react"

interface Bubble {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  color: "emerald" | "pink"
}

export function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    const newBubbles: Bubble[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 40 + 20,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      color: Math.random() > 0.5 ? "emerald" : "pink",
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`absolute rounded-full animate-bubble ${
            bubble.color === "emerald"
              ? "bg-emerald/20 shadow-[0_0_20px_var(--emerald)]"
              : "bg-pink/20 shadow-[0_0_20px_var(--pink)]"
          }`}
          style={{
            left: `${bubble.left}%`,
            width: bubble.size,
            height: bubble.size,
            animationDuration: `${bubble.duration}s`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
