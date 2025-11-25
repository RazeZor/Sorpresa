"use client"

import { useState, useEffect } from "react"
import { Heart, Sparkles, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MessageSectionProps {
  onContinue: () => void
}

const messages = [
  "¡Holi, Valecitaaa! ✨",
  "Hace tiempo que no nos vemos...",
  "Y por eso hoy quería darte un regalo.",
  "Desde que te conocí, supe cuánto querías ver esto 💚",
  "TQM, chavoncita <3 ¡Disfrútalo!",
];

export function MessageSection({ onContinue }: MessageSectionProps) {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    if (currentMessage >= messages.length) {
      setShowButton(true)
      return
    }

    const message = messages[currentMessage]
    let charIndex = 0
    setIsTyping(true)
    setDisplayText("")

    const typeInterval = setInterval(() => {
      if (charIndex < message.length) {
        setDisplayText(message.slice(0, charIndex + 1))
        charIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)

        setTimeout(() => {
          setCurrentMessage((prev) => prev + 1)
        }, 1500)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [currentMessage])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Glinda's Bubble Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-pink/10 animate-pulse shadow-[0_0_100px_var(--pink)]" />
      </div>

      {/* Message Display */}
      <div className="relative z-10 text-center space-y-8">
        <div className="flex justify-center mb-8">
          <Heart className="w-16 h-16 text-pink animate-float" fill="var(--pink)" />
        </div>

        <div className="min-h-[120px] flex items-center justify-center">
          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-bold transition-all duration-300 ${
              currentMessage % 2 === 0 ? "text-emerald" : "text-pink"
            }`}
          >
            {displayText}
            {isTyping && <span className="animate-pulse">|</span>}
          </h2>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {messages.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i < currentMessage
                  ? "bg-pink scale-100"
                  : i === currentMessage
                    ? "bg-emerald scale-125 animate-pulse"
                    : "bg-muted scale-75"
              }`}
            />
          ))}
        </div>

        {/* Continue Button */}
        {showButton && (
          <div className="animate-reveal mt-12">
            <Button
              onClick={onContinue}
              className="px-10 py-6 text-xl font-bold rounded-full bg-gradient-to-r from-pink to-emerald hover:from-pink-glow hover:to-emerald-glow shadow-[0_0_40px_var(--pink)] hover:shadow-[0_0_60px_var(--pink)] transition-all duration-500"
            >
              <Sparkles className="mr-2" />
              ¡AER MI REGALO!
              <Sparkles className="ml-2" />
            </Button>

            <div className="mt-6 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-gold" />
            </div>
          </div>
        )}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-20 left-10 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-12 h-12 text-emerald" />
      </div>
      <div className="absolute top-20 right-10 animate-float" style={{ animationDelay: "2s" }}>
        <Sparkles className="w-12 h-12 text-pink" />
      </div>
    </section>
  )
}
