export default function Contact() {
  return (
    <section id="contact" className="bg-[#060505] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.3em] text-[#ffe2a9]/70">GET IN TOUCH</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Mari Bangun Website Impianmu</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">Konsultasi gratis — ceritakan kebutuhanmu, kami kasih solusi & estimasi.</p>
          <div className="mt-8 space-y-4 text-sm text-white/60">
            <p>📧 hello@trialab.id</p>
            <p>📱 +62 812-3456-7890</p>
            <p>📍 Jakarta & Remote — melayani seluruh Indonesia</p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-[#19130f] p-6 md:p-8">
          <div className="grid gap-4">
            <input placeholder="Nama" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ffe2a9]/30" />
            <input placeholder="Email / WhatsApp" className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ffe2a9]/30" />
            <select className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/60 outline-none focus:border-[#ffe2a9]/30">
              <option>Company Profile</option>
              <option>Landing Page</option>
              <option>E-Commerce</option>
              <option>Custom Web App</option>
              <option>Lainnya</option>
            </select>
            <textarea rows={4} placeholder="Ceritakan project kamu..." className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#ffe2a9]/30" />
            <button className="rounded-full bg-white py-3 text-sm font-medium text-black hover:bg-white/90">Kirim Pesan</button>
            <p className="text-center text-xs text-white/30">Kami balas dalam 24 jam kerja.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
