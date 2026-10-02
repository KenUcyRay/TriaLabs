"use client"

import BorderGlow from "@/components/ui/border-glow"

const REVIEWS = [
  { name: "Andi Pratama", role: "CEO, Maison Lumiere", text: "Tria Lab bikin web kami terlihat premium. Client langsung percaya sejak kunjungan pertama." },
  { name: "Sarah Lee", role: "Founder, Bloom Store", text: "Landing page dari Tria Lab naikin konversi 3x lipat. Worth every penny!" },
  { name: "Budi Santoso", role: "Owner, Haven Resort", text: "Responsif, cepat, dan maintenance-nya enak. Gak lepas tangan setelah jadi." },
]

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] px-6 py-20 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1240px]">
        <p className="text-center text-xs tracking-[0.3em] text-[#ffe2a9]/70">TESTIMONIALS</p>
        <h2 className="mt-3 text-center text-2xl font-semibold text-white md:text-3xl">Apa Kata Klien</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <BorderGlow
              key={r.name}
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={28}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div className="p-6">
                <p className="text-sm leading-relaxed text-white/70">&quot;{r.text}&quot;</p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-sm font-medium text-white">{r.name}</p>
                  <p className="text-xs text-white/40">{r.role}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  )
}
