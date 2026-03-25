'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [muted, setMuted] = useState(false)

  function toggleMute() {
    const next = !muted
    setMuted(next)
    if (typeof window !== 'undefined') (window as Window & { glitchMuted?: boolean }).glitchMuted = next
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.references, href: '#references' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <Image
            src="/alilab-logo.png"
            alt="aliLab"
            width={36}
            height={36}
            className="rounded-sm opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm font-bold transition-colors duration-200"
              style={{ color: '#9cdcfe' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#4ec9b0' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#9cdcfe' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-4">
          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Sesi aç' : 'Sesi kapat'}
            className="flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200"
            style={{
              borderColor: muted ? '#ffffff20' : '#00d4ff40',
              color:        muted ? '#ffffff30' : '#00d4ff80',
              backgroundColor: 'transparent',
            }}
          >
            {muted ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="1" y1="1" x2="23" y2="23"/>
                <path d="M9 9v6h4l5 5V4l-5 5H9z"/>
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
              </svg>
            )}
          </button>

          {/* Language Toggle — pill style matching descriptor pills */}
          <div className="flex items-center gap-1.5">
            {(['tr', 'en'] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-200"
                style={{
                  borderColor:     lang === l ? '#00d4ff80' : '#ffffff20',
                  color:           lang === l ? '#00d4ff'   : '#ffffff40',
                  backgroundColor: lang === l ? '#00d4ff0d' : 'transparent',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-alilab-muted hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm font-bold py-1 transition-colors"
              style={{ color: '#9cdcfe' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
