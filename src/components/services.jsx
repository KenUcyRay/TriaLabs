"use client"

import BounceCards from "@/components/ui/bounce-cards"

const images = [
  "https://picsum.photos/400/400?grayscale",
  "https://picsum.photos/500/500?grayscale",
  "https://picsum.photos/600/600?grayscale",
  "https://picsum.photos/700/700?grayscale",
  "https://picsum.photos/300/300?grayscale",
]

const transformStyles = [
  "rotate(5deg) translate(-150px)",
  "rotate(0deg) translate(-70px)",
  "rotate(-5deg)",
  "rotate(5deg) translate(70px)",
  "rotate(-5deg) translate(150px)",
]

const SERVICES = [
  { title: "Company Profile", desc: "Website resmi untuk membangun kredibilitas" },
  { title: "Landing Page", desc: "Halaman konversi tinggi untuk campaign" },
  { title: "E-Commerce", desc: "Toko online lengkap pembayaran & stok" },
  { title: "Custom Web App", desc: "Sistem booking & dashboard custom" },
  { title: "UI/UX Design", desc: "Desain modern responsive" },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0a0a] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.3em] text-[#ffe2a9]/70">WHAT WE DO</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Services Kami</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">Solusi end-to-end dari desain hingga siap pakai.</p>
        </div>

        <div className="mt-12 flex justify-center overflow-visible">
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-[#19130f] p-5 text-center">
              <h3 className="text-sm font-medium text-white">{s.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
