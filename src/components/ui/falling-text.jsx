"use client"

import { useEffect, useRef } from "react"
import Matter from "matter-js"

function parseFontSize(v) {
  if (typeof v === "number") return v
  if (typeof v === "string" && v.endsWith("rem")) return parseFloat(v) * 16
  if (typeof v === "string" && v.endsWith("px")) return parseFloat(v)
  return 32
}

export default function FallingText({
  text = "",
  highlightWords = [],
  highlightClass = "highlighted",
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.56,
  fontSize = "2rem",
  mouseConstraintStiffness = 0.9,
  className = "",
  style,
  ...props
}) {
  const containerRef = useRef(null)
  const wordRefs = useRef([])
  const engineRef = useRef(null)
  const runnerRef = useRef(null)
  const bodiesRef = useRef([])
  const triggeredRef = useRef(trigger !== "hover")

  const words = text.split(" ").filter(Boolean)
  const fontPx = parseFontSize(fontSize)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !words.length) return

    const { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Body } = Matter

    const engine = Engine.create()
    engine.world.gravity.y = gravity
    engineRef.current = engine
    const runner = Runner.create()
    runnerRef.current = runner

    const rect = container.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const ground = Bodies.rectangle(width / 2, height + 40, width + 80, 80, { isStatic: true, render: { visible: false } })
    const left = Bodies.rectangle(-20, height / 2, 40, height * 2, { isStatic: true, render: { visible: false } })
    const right = Bodies.rectangle(width + 20, height / 2, 40, height * 2, { isStatic: true, render: { visible: false } })
    Composite.add(engine.world, [ground, left, right])

    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    ctx.font = `${fontPx}px Geist Variable, sans-serif`

    bodiesRef.current = words.map((w, i) => {
      const metrics = ctx.measureText(w)
      const bw = Math.ceil(metrics.width) + 28
      const bh = fontPx + 14
      const x = 60 + (i * (bw + 16) % Math.max(width - 120, 200)) + (Math.random() * 20 - 10)
      const y = -60 - Math.random() * 180 - i * 6
      const body = Bodies.rectangle(x, y, bw, bh, {
        chamfer: { radius: 10 },
        restitution: 0.35,
        friction: 0.5,
        frictionAir: 0.02,
        angularDamping: 0.12,
        isStatic: trigger === "hover",
        render: { visible: false },
      })
      return body
    })

    Composite.add(engine.world, bodiesRef.current)

    const mouse = Mouse.create(container)
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: mouseConstraintStiffness, render: { visible: false } },
    })
    Composite.add(engine.world, mouseConstraint)
    engine.world.gravity.scale = 0.001

    Runner.run(runner, engine)

    let raf = 0
    const update = () => {
      raf = requestAnimationFrame(update)
      bodiesRef.current.forEach((body, i) => {
        const el = wordRefs.current[i]
        if (!el || !body) return
        const { x, y } = body.position
        el.style.transform = `translate3d(${x - el.offsetWidth / 2}px, ${y - el.offsetHeight / 2}px, 0) rotate(${body.angle}rad)`
        if (wireframes) el.style.outline = "1px solid rgba(255,255,255,0.2)"
      })
    }
    update()

    const handleEnter = () => {
      if (triggeredRef.current) return
      triggeredRef.current = true
      bodiesRef.current.forEach((b) => Body.setStatic(b, false))
    }
    const handleClick = () => {
      if (trigger !== "click") return
      triggeredRef.current = true
      bodiesRef.current.forEach((b) => Body.setStatic(b, false))
    }

    if (trigger === "hover") container.addEventListener("mouseenter", handleEnter)
    if (trigger === "click") container.addEventListener("click", handleClick)
    if (trigger === "auto") triggeredRef.current = true

    return () => {
      cancelAnimationFrame(raf)
      Runner.stop(runner)
      Composite.clear(engine.world, false)
      Engine.clear(engine)
      if (trigger === "hover") container.removeEventListener("mouseenter", handleEnter)
      if (trigger === "click") container.removeEventListener("click", handleClick)
    }
  }, [text, gravity, mouseConstraintStiffness, trigger, wireframes, fontPx, words])

  const isHighlighted = (w) => highlightWords.some((h) => h.toLowerCase() === w.replace(/[.,!?]/g, "").toLowerCase())

  return (
    <div
      ref={containerRef}
      className={`falling-text ${className}`}
      style={{ backgroundColor, fontSize, ...style }}
      {...props}
    >
      {words.map((w, i) => (
        <span
          key={`${w}-${i}`}
          ref={(el) => (wordRefs.current[i] = el)}
          className={`falling-text__word ${isHighlighted(w) ? highlightClass : ""}`}
        >
          {w}
        </span>
      ))}
      {trigger === "hover" && (
        <span className="falling-text__hint">Hover to drop</span>
      )}
    </div>
  )
}

export { FallingText }
