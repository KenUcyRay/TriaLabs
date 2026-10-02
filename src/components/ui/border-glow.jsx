"use client"

import { useRef, useState } from "react"

export default function BorderGlow({
  children,
  edgeSensitivity = 30,
  glowColor = "40 80 80",
  backgroundColor = "#120F17",
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  className = "",
  style,
  ...props
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [active, setActive] = useState(false)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const dist = Math.min(x, y, rect.width - x, rect.height - y)
    setActive(dist < edgeSensitivity)
    setPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 })
  }

  const handleLeave = () => setActive(false)

  const glowBg = `radial-gradient(${glowRadius * 8}px circle at ${pos.x}% ${pos.y}%, ${colors[0]} 0%, ${colors[1] ?? colors[0]} ${coneSpread}%, ${colors[2] ?? colors[0]} ${coneSpread * 1.8}%, transparent 62%)`

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`border-glow ${animated ? "border-glow--animated" : ""} ${className}`}
      style={{ borderRadius, ...style }}
      {...props}
    >
      <div
        className="border-glow__glow"
        style={{
          borderRadius,
          opacity: active ? glowIntensity : 0,
          background: glowBg,
          boxShadow: `0 0 ${glowRadius}px rgb(${glowColor} / 0.35)`,
        }}
      />
      <div className="border-glow__border" style={{ borderRadius }} />
      <div
        className="border-glow__inner"
        style={{ backgroundColor, borderRadius: borderRadius - 1 }}
      >
        {children}
      </div>
    </div>
  )
}

export { BorderGlow }
