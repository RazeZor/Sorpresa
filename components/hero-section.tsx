"use client"

import { useState } from "react"
import { Sparkles, Stars } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onStart: () => void
}

export function HeroSection({ onStart }: HeroSectionProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Decorative Witch Hat */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 animate-float">
        <svg width="120" height="120" viewBox="0 0 100 100" className="animate-glow">
          <path
            d="M50 5 L70 45 L85 85 L50 75 L15 85 L30 45 Z"
            fill="var(--emerald)"
            stroke="var(--gold)"
            strokeWidth="2"
          />
          <ellipse cx="50" cy="85" rx="45" ry="10" fill="var(--emerald)" stroke="var(--gold)" strokeWidth="2" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-8 mt-20">
        <div className="relative inline-block">
          <Sparkles className="absolute -top-8 -left-8 w-8 h-8 text-gold animate-pulse" />
          <Sparkles
            className="absolute -top-8 -right-8 w-8 h-8 text-gold animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="magic-gradient">Hola,</span>
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-4 text-pink animate-pink-glow">
            Tengo algo para ti
          </h2>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Preparé algo especial...
          <br />
          <span className="text-emerald">¿Lista para descubrirlo?</span>
        </p>

        {/* Animated Stars instead of hearts */}
        <div className="flex justify-center gap-4 py-4">
          {[...Array(5)].map((_, i) => (
            <Sparkles key={i} className="w-6 h-6 text-gold animate-float" style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>

        <div className="relative z-50">
          <Button
            onClick={onStart}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            size="lg"
            className={`
              relative px-12 py-8 text-xl md:text-2xl font-bold rounded-full
              bg-gradient-to-r from-emerald to-pink
              hover:from-emerald-glow hover:to-pink-glow
              transform transition-all duration-500 cursor-pointer
              text-white
              ${isHovered ? "scale-110 shadow-[0_0_60px_var(--emerald)]" : "shadow-[0_0_30px_var(--emerald)]"}
            `}
          >
            <Stars className="mr-3 w-6 h-6" />
            Descubre tu Sorpresa
            <Stars className="ml-3 w-6 h-6" />
          </Button>

          {/* Magical sparkles around button */}
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gold animate-ping"
                  style={{
                    top: `${50 + 60 * Math.sin((i * Math.PI) / 4)}%`,
                    left: `${50 + 60 * Math.cos((i * Math.PI) / 4)}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Decoration - Emerald City Silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1200 200" className="w-full h-full opacity-30">
          <path
            d="M0 200 L0 150 L50 150 L50 100 L100 100 L100 80 L150 80 L150 60 L200 60 L200 100 L250 100 L250 150 L300 150 L300 80 L350 80 L350 40 L400 40 L400 80 L450 80 L450 150 L500 150 L500 100 L550 100 L550 60 L600 60 L600 20 L650 20 L650 60 L700 60 L700 100 L750 100 L750 150 L800 150 L800 80 L850 80 L850 40 L900 40 L900 80 L950 80 L950 150 L1000 150 L1000 100 L1050 100 L1050 60 L1100 60 L1100 100 L1150 100 L1150 150 L1200 150 L1200 200 Z"
            fill="var(--emerald)"
          />
        </svg>
      </div>
    </section>
  )
}
