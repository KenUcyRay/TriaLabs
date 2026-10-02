export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-white">TRIA LAB</p>
          <p className="mt-2 max-w-sm text-xs leading-relaxed text-white/40">Websites that work — company profile, landing page, hingga custom web app untuk bisnismu.</p>
        </div>
        <div className="flex gap-6 text-xs tracking-widest text-white/40">
          <a href="#" className="hover:text-white">INSTAGRAM</a>
          <a href="#" className="hover:text-white">LINKEDIN</a>
          <a href="#" className="hover:text-white">DRIBBBLE</a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-[1240px] border-t border-white/5 pt-6 text-xs text-white/20">© {new Date().getFullYear()} Tria Lab. All rights reserved.</p>
    </footer>
  )
}
