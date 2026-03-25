'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <span className="font-mono text-alilab-green text-sm tracking-[0.2em] uppercase mb-4 block">
          {'// contact'}
        </span>
        <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4" style={{ color: '#4ec9b0' }}>
          {t.contact.title}
        </h2>
        <p className="font-mono text-lg mb-12 leading-relaxed" style={{ color: '#9cdcfe' }}>
          {t.contact.subtitle}
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/alilab-interactive/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-alilab-cyan/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-[#0077b5]/20 border border-[#0077b5]/30 flex items-center justify-center group-hover:bg-[#0077b5]/30 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#0077b5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="font-mono text-sm font-bold" style={{ color: '#dcdcaa' }}>{t.contact.linkedin}</span>
            <span className="font-mono text-xs" style={{ color: '#9cdcfe' }}>alilab-interactive</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/alilabinteractive"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-alilab-red/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-alilab-red/10 border border-alilab-red/20 flex items-center justify-center group-hover:bg-alilab-red/20 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff2d55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <span className="font-mono text-sm font-bold" style={{ color: '#dcdcaa' }}>{t.contact.instagram}</span>
            <span className="font-mono text-xs" style={{ color: '#9cdcfe' }}>@alilabinteractive</span>
          </a>

          {/* Email */}
          <a
            href="mailto:info@alilab.com.tr"
            className="group flex flex-col items-center gap-3 bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-alilab-green/40 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-full bg-alilab-green/10 border border-alilab-green/20 flex items-center justify-center group-hover:bg-alilab-green/20 transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <span className="font-mono text-sm font-bold" style={{ color: '#dcdcaa' }}>{t.contact.email}</span>
            <span className="font-mono text-xs" style={{ color: '#9cdcfe' }}>info@alilab.com.tr</span>
          </a>
        </div>
      </div>
    </section>
  )
}
