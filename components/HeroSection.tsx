'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function HeroSection() {
  const { t } = useLanguage()

  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      {/* Tagline */}
      <h2 className="font-mono text-2xl md:text-4xl font-bold leading-snug mb-5 max-w-3xl" style={{ color: '#4ec9b0' }}>
        {t.hero.tagline}
      </h2>

      {/* Descriptor pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
        {[
          { label: 'AI',             color: '#00d4ff' },
          { label: 'IoT',            color: '#00ff88' },
          { label: 'Cross-Platform', color: '#9b59b6' },
          { label: 'Full-Stack',     color: '#dcdcaa' },
        ].map(({ label, color }) => (
          <span
            key={label}
            className="font-mono text-xs px-3 py-1.5 rounded-full border cursor-default"
            style={{
              borderColor:     color + '40',
              color:           color,
              backgroundColor: color + '0d',
            }}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Subtitle */}
      <p className="font-mono text-base md:text-lg max-w-xl mb-10 leading-relaxed" style={{ color: '#9cdcfe' }}>
        {t.hero.subtitle}
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <a
          href="#services"
          className="font-mono text-xs px-5 py-2 rounded-full border transition-all duration-200 active:scale-95"
          style={{ borderColor: '#00d4ff40', color: '#00d4ff', backgroundColor: '#00d4ff0d' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#00d4ff22'; el.style.borderColor = '#00d4ff80' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#00d4ff0d'; el.style.borderColor = '#00d4ff40' }}
        >
          {t.hero.cta_services}
        </a>
        <a
          href="#contact"
          className="font-mono text-xs px-5 py-2 rounded-full border transition-all duration-200 active:scale-95"
          style={{ borderColor: '#ffffff20', color: '#ffffff60', backgroundColor: 'transparent' }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = '#ffffff0d'; el.style.borderColor = '#ffffff40'; el.style.color = '#ffffffaa' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.backgroundColor = 'transparent'; el.style.borderColor = '#ffffff20'; el.style.color = '#ffffff60' }}
        >
          {t.hero.cta_contact}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-xs text-white/40 font-light tracking-[0.3em]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
