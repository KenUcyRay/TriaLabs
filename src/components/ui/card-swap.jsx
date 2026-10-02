"use client"

import { Children, cloneElement, useEffect, useRef, useState } from "react"

export function Card({ children, className = "", style, ...props }) {
  return (
    <div className={`card-swap__card ${className}`} style={style} {...props}>
      {children}
    </div>
  )
}

export default function CardSwap({
  children,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  skewAmount,
  easing = "ease",
  className = "",
  style,
  ...props
}) {
  const items = Children.toArray(children)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      setIndex((v) => (v + 1) % items.length)
    }, delay)
    return () => clearInterval(timerRef.current)
  }, [delay, items.length, paused])

  const handleEnter = () => { if (pauseOnHover) setPaused(true) }
  const handleLeave = () => { if (pauseOnHover) setPaused(false) }

  return (
    <div
      className={`card-swap ${className}`}
      style={style}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      {...props}
    >
      {items.map((child, i) => {
        const offset = (i - index + items.length) % items.length
        const isTop = offset === 0
        const x = offset * (cardDistance * 0.45)
        const y = offset * (verticalDistance * 0.22)
        const rotate = offset * -2
        const scale = 1 - offset * 0.04
        return cloneElement(child, {
          key: i,
          style: {
            ...(child.props?.style || {}),
            transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg) scale(${scale}) ${skewAmount ? `skew(${skewAmount}deg)` : ""}`,
            zIndex: items.length - offset,
            opacity: 1 - offset * 0.08,
            transition: `transform 0.7s ${easing}, opacity 0.7s ${easing}`,
            pointerEvents: isTop ? "auto" : "none",
          },
        })
      })}
    </div>
  )
}

export { CardSwap }
