'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-sm" style={{ color: '#4ec9b0' }}>
            ali<span style={{ color: '#dcdcaa' }}>Lab</span>
          </span>
          <span className="font-mono text-xs" style={{ color: '#9cdcfe' }}>
            © {year} — {t.footer.rights}
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#services" className="font-mono text-xs transition-colors" style={{ color: '#9cdcfe' }}>
            {t.nav.services}
          </a>
          <a href="#references" className="font-mono text-xs transition-colors" style={{ color: '#9cdcfe' }}>
            {t.nav.references}
          </a>
          <a href="#contact" className="font-mono text-xs transition-colors" style={{ color: '#9cdcfe' }}>
            {t.nav.contact}
          </a>
        </div>
        <span className="font-mono text-[10px] text-alilab-muted/60">{t.footer.built}</span>
      </div>
    </footer>
  )
}
