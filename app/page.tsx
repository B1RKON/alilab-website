import CodeRain from '@/components/CodeRain'
import GlitchEffect from '@/components/GlitchEffect'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import ReferencesSection from '@/components/ReferencesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Animated code rain background */}
      <CodeRain />

      {/* Subtle radial gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Glitch hover effect + sound — global */}
      <GlitchEffect />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ReferencesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
