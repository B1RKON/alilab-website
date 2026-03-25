'use client'

import { useLanguage } from '@/context/LanguageContext'

const ICONS = ['⚡', '📡', '📱', '🔄', '🎮', '🌐', '🗄️', '🎬']
const ACCENT_COLORS = [
  'border-alilab-cyan/20 hover:border-alilab-cyan/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]',
  'border-alilab-purple/20 hover:border-alilab-purple/50 hover:shadow-[0_0_30px_rgba(155,89,182,0.1)]',
  'border-alilab-green/20 hover:border-alilab-green/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]',
  'border-alilab-orange/20 hover:border-alilab-orange/50 hover:shadow-[0_0_30px_rgba(255,107,53,0.1)]',
  'border-alilab-red/20 hover:border-alilab-red/50 hover:shadow-[0_0_30px_rgba(255,45,85,0.1)]',
  'border-alilab-cyan/20 hover:border-alilab-cyan/50 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]',
  'border-alilab-purple/20 hover:border-alilab-purple/50 hover:shadow-[0_0_30px_rgba(155,89,182,0.1)]',
  'border-alilab-green/20 hover:border-alilab-green/50 hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]',
]
const TAG_COLORS = [
  'bg-alilab-cyan/10 text-alilab-cyan',
  'bg-alilab-purple/10 text-alilab-purple',
  'bg-alilab-green/10 text-alilab-green',
  'bg-alilab-orange/10 text-alilab-orange',
  'bg-alilab-red/10 text-alilab-red',
]

export default function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-alilab-cyan text-sm tracking-[0.2em] uppercase mb-4 block">
            {'// services'}
          </span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4" style={{ color: '#dcdcaa' }}>
            {t.services.title}
          </h2>
          <p className="font-mono text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#9cdcfe' }}>
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className={`group relative bg-white/[0.03] backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1 cursor-default ${ACCENT_COLORS[i]}`}
            >
              {/* Icon */}
              <div className="text-3xl mb-4">{ICONS[i]}</div>

              {/* Title */}
              <h3 className="font-mono font-bold text-sm mb-3 leading-snug" style={{ color: '#4ec9b0' }}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-mono text-xs leading-relaxed mb-4" style={{ color: '#d4d4d4' }}>
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {service.tags.map((tag, j) => (
                  <span
                    key={tag}
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-full ${TAG_COLORS[(i + j) % TAG_COLORS.length]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
