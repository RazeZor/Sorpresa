"use client"

import { useState, useEffect } from "react"
import { Ticket, Calendar, MapPin, Sparkles, PartyPopper, Star, QrCode } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import confetti from "canvas-confetti"

interface GiftRevealProps {
  showGift: boolean
}

export function GiftReveal({ showGift }: GiftRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    if (showGift && !isRevealed) {
      const timer = setTimeout(() => {
        setIsRevealed(true)
        setShowConfetti(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [showGift, isRevealed])

  useEffect(() => {
    if (showConfetti) {
      const duration = 5 * 1000
      const end = Date.now() + duration

      const colors = ["#22c55e", "#ec4899", "#fbbf24"]

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        })
        confetti({
          particleCount: 3,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      }

      frame()
    }
  }, [showConfetti])

  if (!showGift) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald/20 animate-pulse flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-emerald animate-spin" />
          </div>
          <p className="text-2xl text-muted-foreground">Preparando la magia...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink/10 blur-3xl animate-pulse" />
      </div>

      <div
        className={`relative z-10 transition-all duration-1000 ${isRevealed ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
      >
        {/* Celebration Header */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex justify-center gap-4 mb-4">
            <PartyPopper className="w-12 h-12 text-gold animate-bounce" />
            <PartyPopper className="w-12 h-12 text-gold animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold magic-gradient">SORPRESA!</h1>

          <p className="text-xl md:text-2xl text-pink">Tu regalo es...</p>
        </div>

        {/* Ticket Card */}
        <Card className="relative max-w-lg mx-auto bg-gradient-to-br from-emerald/20 via-card to-pink/20 border-2 border-gold/50 overflow-hidden shadow-[0_0_60px_var(--emerald)]">
          {/* Ticket Perforations */}
          <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-around py-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-background" />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-4 flex flex-col justify-around py-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-4 h-4 rounded-full bg-background" />
            ))}
          </div>

          <div className="p-8 md:p-12 mx-4">
            {/* Wicked Logo */}
            <div className="text-center mb-6">
              <div className="inline-block relative">
                <h2
                  className="text-5xl md:text-7xl font-bold text-emerald tracking-wider"
                  style={{ fontFamily: "var(--font-dancing)" }}
                >
                  WICKED
                </h2>
                <div className="absolute -top-4 -right-4">
                  <Star className="w-8 h-8 text-gold animate-spin" style={{ animationDuration: "3s" }} />
                </div>
              </div>
              <p className="text-pink text-lg mt-2">La Película</p>
            </div>

            {/* Ticket Details */}
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4 p-4 bg-emerald/10 rounded-xl border border-emerald/30">
                <Ticket className="w-8 h-8 text-emerald flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Entrada</p>
                  <p className="text-xl font-bold text-emerald">3D PREMIER</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-pink/10 rounded-xl border border-pink/30">
                <Calendar className="w-8 h-8 text-pink flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Fecha</p>
                  <p className="text-xl font-bold text-pink">Tu eliges el día</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gold/10 rounded-xl border border-gold/30">
                <MapPin className="w-8 h-8 text-gold flex-shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Compañía</p>
                  <p className="text-xl font-bold text-gold">Conmigo</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-center text-sm text-muted-foreground mb-4">Escanea para ver tu entrada</p>
              <div className="flex justify-center">
                {/* 
                  ========================================
                  PLACEHOLDER PARA TU QR
                  ========================================
                  Reemplaza la imagen de abajo con tu QR real.
                  Solo cambia el src="/tu-qr-real.png" 
                  O sube la imagen a public/ y referenciala aquí
                */}
                <div className="w-48 h-48 bg-white rounded-xl p-3 shadow-lg border-2 border-gold/30 flex items-center justify-center">
                  {/* Placeholder visual mientras no tengas el QR */}
                  <div className="w-full h-full border-2 border-dashed border-emerald/50 rounded-lg flex flex-col items-center justify-center gap-2 bg-gray-50">
                    <QrCode className="w-16 h-16 text-emerald/60" />
                    <p className="text-xs text-gray-500 text-center px-2">Tu QR aquí</p>
                  </div>

                  {/* 
                    Cuando tengas el QR, descomenta esto y comenta el div de arriba:
                    <img 
                      src="/qr-entrada.png" 
                      alt="QR Code de tu entrada"
                      className="w-full h-full object-contain"
                    />
                  */}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-border/50 text-center">
              <p className="text-lg text-muted-foreground italic">"Defying Gravity... juntos"</p>
              <div className="flex justify-center gap-2 mt-4">
                <Sparkles className="w-6 h-6 text-emerald animate-pulse" />
                <Star className="w-6 h-6 text-gold animate-pulse" style={{ animationDelay: "0.3s" }} />
                <Sparkles className="w-6 h-6 text-pink animate-pulse" style={{ animationDelay: "0.6s" }} />
              </div>
            </div>
          </div>
        </Card>

        {/* Action Button */}
        <div className="text-center mt-8">
          <Button
            onClick={() => {
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ["#22c55e", "#ec4899", "#fbbf24"],
              })
            }}
            className="px-8 py-6 text-lg font-bold rounded-full bg-gradient-to-r from-emerald to-pink hover:from-emerald-glow hover:to-pink-glow shadow-[0_0_30px_var(--emerald)] transition-all duration-300 hover:scale-105 text-white"
          >
            <Sparkles className="mr-2" />
            Vamos a ver Wicked!
            <Sparkles className="ml-2" />
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -left-10 animate-float">
          <div className="w-20 h-20 rounded-full bg-emerald/30 blur-xl" />
        </div>
        <div className="absolute -bottom-10 -right-10 animate-float" style={{ animationDelay: "2s" }}>
          <div className="w-20 h-20 rounded-full bg-pink/30 blur-xl" />
        </div>
      </div>

      {/* Bottom message */}
      <div
        className={`mt-12 text-center transition-all duration-1000 delay-1000 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <p className="text-2xl md:text-3xl font-bold">
          <span className="text-emerald">Espero que</span>
          <span className="text-muted-foreground mx-2">te guste</span>
          <span className="text-pink">esta sorpresa</span>
        </p>
      </div>
    </section>
  )
}
