export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="text-sm font-semibold tracking-[0.2em] text-white">TRIA LAB</a>
        <div className="hidden items-center gap-8 md:flex">
          <a href="#about" className="text-xs tracking-widest text-white/70 hover:text-white">ABOUT</a>
          <a href="#services" className="text-xs tracking-widest text-white/70 hover:text-white">SERVICES</a>
          <a href="#portfolio" className="text-xs tracking-widest text-white/70 hover:text-white">PORTFOLIO</a>
          <a href="#contact" className="text-xs tracking-widest text-white/70 hover:text-white">CONTACT</a>
        </div>
        <a href="#contact" className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black hover:bg-white/90">Let&apos;s Talk</a>
      </nav>
    </header>
  )
}
