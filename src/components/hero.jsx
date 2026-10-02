import { SilkAurora } from "@/components/ui/silk-aurora"

export default function Hero() {
  return (
    <SilkAurora
      title="Tria Lab"
      subtitle="Websites That Work"
      description="From company profiles to custom web apps, we build digital experiences that grow your business."
      baseColor="#060505"
      midColor="#19130f"
      sheenColor="#ffe2a9"
      accentColor="#c58d5d"
      intensity={0.9}
      speed={0.75}
    >
      <div className="flex flex-wrap gap-4">
        <a href="#contact" className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-white/90">
          Start Project
        </a>
        <a href="#portfolio" className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/10">
          View Work
        </a>
      </div>
    </SilkAurora>
  )
}
