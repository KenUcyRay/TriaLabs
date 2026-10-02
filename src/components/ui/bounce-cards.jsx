"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function BounceCards({
  className = "",
  images = [],
  containerWidth = 500,
  containerHeight = 250,
  animationDelay = 1,
  animationStagger = 0.08,
  easeType = "elastic.out(1, 0.5)",
  transformStyles = [],
  enableHover = false,
}) {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const cards = el.querySelectorAll(".bounce-card")
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0, scale: 0.92 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.9,
        delay: animationDelay,
        stagger: animationStagger,
        ease: easeType,
        overwrite: true,
      }
    )
    if (!enableHover) return
    cards.forEach((card) => {
      const enter = () => gsap.to(card, { y: -12, duration: 0.35, ease: "power2.out" })
      const leave = () => gsap.to(card, { y: 0, duration: 0.35, ease: "power2.out" })
      card.addEventListener("mouseenter", enter)
      card.addEventListener("mouseleave", leave)
      card._bcCleanup = () => {
        card.removeEventListener("mouseenter", enter)
        card.removeEventListener("mouseleave", leave)
      }
    })
    return () => {
      gsap.killTweensOf(cards)
      cards.forEach((c) => c._bcCleanup?.())
    }
  }, [animationDelay, animationStagger, easeType, enableHover, images.length])

  return (
    <div
      ref={containerRef}
      className={`bounce-cards ${className}`}
      style={{ width: containerWidth, height: containerHeight, position: "relative" }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="bounce-card"
          style={{ transform: transformStyles[i] ?? transformStyles[transformStyles.length - 1] ?? "none" }}
        >
          <img src={src} alt="" className="bounce-card__img" draggable={false} />
        </div>
      ))}
    </div>
  )
}

export { BounceCards }
