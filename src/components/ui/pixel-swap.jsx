"use client"

import { useEffect, useMemo, useRef, useState } from "react"

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function PixelSwap({
  firstContent,
  secondContent,
  pixelSize = 64,
  gap = 0,
  pixelRadius = 0,
  pixelSpin = 0,
  pixelScale = 0.35,
  duration = 1400,
  pixelDuration = 450,
  pattern = "random",
  randomness = 0,
  fade = true,
  trigger = "hover",
  className = "",
  style,
  ...props
}) {
  const ref = useRef(null)
  const [size, setSize] = useState({ w: 0, h: 0 })
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect
      setSize({ w: Math.round(width), h: Math.round(height) })
    })
    ro.observe(el)
    setSize({ w: el.clientWidth, h: el.clientHeight })
    return () => ro.disconnect()
  }, [])

  const cols = Math.max(1, Math.ceil(size.w / (pixelSize + gap)) || 8)
  const rows = Math.max(1, Math.ceil(size.h / (pixelSize + gap)) || 4)
  const total = cols * rows

  const order = useMemo(() => {
    const base = Array.from({ length: total }, (_, i) => i)
    if (pattern === "random") return shuffle(base)
    return base
  }, [total, pattern, revealed])

  const stagger = total > 1 ? (duration - pixelDuration) / (total - 1) : 0

  const handleEnter = () => { if (trigger === "hover") setRevealed(true) }
  const handleLeave = () => { if (trigger === "hover") setRevealed(false) }
  const handleClick = () => { if (trigger === "click") setRevealed((v) => !v) }

  return (
    <div
      ref={ref}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={handleClick}
      className={`pixel-swap ${className}`}
      style={{ ...style }}
      {...props}
    >
      <div className="pixel-swap__content pixel-swap__content--first" style={{ opacity: revealed ? 0 : 1 }}>
        {firstContent}
      </div>
      <div className="pixel-swap__content pixel-swap__content--second" style={{ opacity: revealed ? 1 : 0 }}>
        {secondContent}
      </div>

      <div
        className="pixel-swap__grid"
        aria-hidden="true"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: gap,
        }}
      >
        {Array.from({ length: total }).map((_, i) => {
          const rank = order.indexOf(i)
          const delay = rank * stagger
          return (
            <div
              key={i}
              className="pixel-swap__pixel"
              style={{
                borderRadius: pixelRadius,
                transitionDuration: `${pixelDuration}ms`,
                transitionDelay: `${revealed ? delay : (total - 1 - rank) * stagger * 0.45}ms`,
                opacity: revealed ? (fade ? 0 : 0) : 1,
                transform: revealed
                  ? `scale(${0.15}) rotate(${pixelSpin}deg)`
                  : `scale(${pixelScale}) rotate(0deg)`,
                background: revealed ? "transparent" : "rgba(255,255,255,0.035)",
                border: revealed ? "1px solid transparent" : "1px solid rgba(255,255,255,0.07)",
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export { PixelSwap }
