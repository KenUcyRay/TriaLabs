"use client"

import { Spiral3DSlider } from "@/components/ui/spiral-3d-slider"

const slides = [
  { src: "https://picsum.photos/seed/maison/800/600", alt: "Maison Lumiere — Company Profile" },
  { src: "https://picsum.photos/seed/nordic/800/600", alt: "Nordic Finance — Landing Page" },
  { src: "https://picsum.photos/seed/bloom/800/600", alt: "Bloom E-Commerce — Online Store" },
  { src: "https://picsum.photos/seed/booking/800/600", alt: "Kita Booking — Web App" },
  { src: "https://picsum.photos/seed/haven/800/600", alt: "Haven Resort — Company Profile" },
  { src: "https://picsum.photos/seed/aura/800/600", alt: "Aura Clinic — Landing Page" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#060505] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] text-[#ffe2a9]/70">SELECTED WORK</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Portfolio</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">Scroll atau hover untuk jelajahi project — auto rotate, drag wheel untuk navigasi spiral.</p>
          </div>
          <a href="#contact" className="text-xs tracking-widest text-white/50 hover:text-white">VIEW ALL →</a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-[1240px] overflow-hidden rounded-2xl border border-white/10">
        <Spiral3DSlider items={slides} autoRotate autoSpeed={0.13} className="min-h-[720px] bg-[#060505] dark:bg-[#060505]" />
      </div>
      <div className="mx-auto mt-6 flex max-w-[1240px] flex-wrap gap-3">
        {slides.map((s) => (
          <span key={s.alt} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
            {s.alt}
          </span>
        ))}
      </div>
    </section>
  )
}
