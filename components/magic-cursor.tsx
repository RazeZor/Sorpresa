"use client"

import { useEffect, useState } from "react"

interface Spark {
  id: number
  x: number
  y: number
  color: string
}

export function MagicCursor() {
  const [sparks, setSparks] = useState<Spark[]>([])

  useEffect(() => {
    let sparkId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newSpark: Spark = {
        id: sparkId++,
        x: e.clientX,
        y: e.clientY,
        color: Math.random() > 0.5 ? "var(--emerald)" : "var(--pink)",
      }

      setSparks((prev) => [...prev.slice(-10), newSpark])
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSparks((prev) => prev.slice(1))
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparks.map((spark, index) => (
        <div
          key={spark.id}
          className="absolute w-2 h-2 rounded-full transition-all duration-300"
          style={{
            left: spark.x,
            top: spark.y,
            backgroundColor: spark.color,
            boxShadow: `0 0 10px ${spark.color}`,
            opacity: (index + 1) / sparks.length,
            transform: `scale(${(index + 1) / sparks.length})`,
          }}
        />
      ))}
    </div>
  )
}
