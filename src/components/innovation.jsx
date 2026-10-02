"use client"

import PixelSwap from "@/components/ui/pixel-swap"

export default function Innovation() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-16 md:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="overflow-hidden rounded-[28px] border border-white/10">
          <PixelSwap
            firstContent={
              <div className="click-prompt text-center">
                <p className="text-xs tracking-[0.3em] text-[#ffe2a9]/60">INNOVATION</p>
                <p className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">Call Tria Lab</p>
                <p className="mt-3 text-sm text-white/40">Hover to reveal</p>
              </div>
            }
            secondContent={
              <div className="found-message text-center">
                <p className="text-xs tracking-[0.3em] text-[#c084fc]/80">SOLUTION</p>
                <p className="mt-3 bg-gradient-to-r from-[#c084fc] via-[#f472b6] to-[#38bdf8] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">Solution to Innovation</p>
                <p className="mt-3 text-sm text-white/50">We turn ideas into digital reality</p>
              </div>
            }
            pixelSize={64}
            gap={0}
            pixelRadius={0}
            pixelSpin={0}
            pixelScale={0.35}
            duration={1400}
            pixelDuration={450}
            pattern="random"
            randomness={0}
            fade
            trigger="hover"
            className="min-h-[420px] bg-[#120F17] md:min-h-[520px]"
          />
        </div>
      </div>
    </section>
  )
}
