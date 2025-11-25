"use client"

import { useState, useEffect, useRef } from "react"
import { HeroSection } from "@/components/hero-section"
import { MessageSection } from "@/components/message-section"
import { GiftReveal } from "@/components/gift-reveal"
import { FloatingBubbles } from "@/components/floating-bubbles"
import { MagicCursor } from "@/components/magic-cursor"
import { SparkleEffect } from "@/components/sparkle-effect"

export default function WickedSurprise() {
  const [currentSection, setCurrentSection] = useState(0)
  const [showGift, setShowGift] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (hasStarted && currentSection >= 2) {
      const timer = setTimeout(() => setShowGift(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [currentSection, hasStarted])

  const handleStart = () => {
    setHasStarted(true)
    setCurrentSection(1)
  }

  const handleNextSection = () => {
    setCurrentSection((prev) => prev + 1)
  }

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden bg-background">
      <FloatingBubbles />
      <MagicCursor />
      <SparkleEffect />

      <main className="relative z-10">
        {!hasStarted && <HeroSection onStart={handleStart} />}

        {hasStarted && currentSection === 1 && <MessageSection onContinue={handleNextSection} />}

        {hasStarted && currentSection >= 2 && <GiftReveal showGift={showGift} />}
      </main>
    </div>
  )
}
