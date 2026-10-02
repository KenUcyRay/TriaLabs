export default function About() {
  return (
    <section id="about" className="bg-[#060505] px-6 py-20 text-white md:px-10 md:py-28">
      <div className="mx-auto max-w-[1240px] grid gap-12 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-xs tracking-[0.3em] text-[#ffe2a9]/70">ABOUT US</p>
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            Crafting Digital <span className="text-[#c58d5d]">Experiences</span> That Matter
          </h2>
          <p className="mt-5 leading-relaxed text-white/60">
            Tria Lab adalah studio web yang fokus membangun website company profile, landing page, dan aplikasi web custom untuk bisnis yang ingin tumbuh lebih cepat di era digital.
          </p>
          <p className="mt-4 leading-relaxed text-white/60">
            Kami percaya website bukan sekadar tampilan — tapi alat untuk membangun kepercayaan dan konversi.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-semibold text-[#ffe2a9]">50+</p>
              <p className="text-xs tracking-widest text-white/50">PROJECTS DONE</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-[#ffe2a9]">98%</p>
              <p className="text-xs tracking-widest text-white/50">CLIENT SATISFACTION</p>
            </div>
          </div>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-[#19130f] p-8">
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-[#ffe2a9]/10 blur-2xl" />
          <h3 className="text-lg font-medium">Vision & Mission</h3>
          <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/60">
            <li className="flex gap-3"><span className="text-[#c58d5d]">—</span> Membantu UMKM & korporat punya web profesional tanpa ribet</li>
            <li className="flex gap-3"><span className="text-[#c58d5d]">—</span> Desain elegan, performa cepat, mudah dikelola</li>
            <li className="flex gap-3"><span className="text-[#c58d5d]">—</span> Support jangka panjang, bukan lepas tangan</li>
          </ul>
          <div className="mt-8 rounded-xl bg-black/40 p-5">
            <p className="text-sm italic text-white/70">&quot;Website yang bagus tidak hanya dilihat, tapi dirasakan.&quot;</p>
            <p className="mt-2 text-xs tracking-widest text-white/40">— TRIA LAB TEAM</p>
          </div>
        </div>
      </div>
    </section>
  )
}
