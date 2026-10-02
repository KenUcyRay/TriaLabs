import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Innovation from "@/components/innovation"
import Navbar from "@/components/navbar"
import Portfolio from "@/components/portfolio"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"

export default function Home() {
  return (
    <div className="bg-[#060505]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Innovation />
      <Contact />
      <Footer />
    </div>
  )
}
