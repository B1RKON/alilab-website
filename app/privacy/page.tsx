'use client'

import { useLanguage } from '@/context/LanguageContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CodeRain from '@/components/CodeRain'

export default function PrivacyPage() {
  const { t } = useLanguage()
  const p = t.privacy

  return (
    <main className="relative bg-black min-h-screen">
      <CodeRain />
      <div
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,212,255,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 pt-28 pb-20">

          {/* Header */}
          <div className="mb-10">
            <span
              className="font-mono text-xs tracking-widest uppercase mb-3 block"
              style={{ color: '#4ec9b0' }}
            >
              {'// '}{p.badge}
            </span>
            <h1 className="font-mono font-bold text-2xl md:text-3xl text-white mb-3">
              {p.title}
            </h1>
            <p className="font-mono text-sm leading-relaxed mb-2" style={{ color: '#9cdcfe' }}>
              {p.subtitle}
            </p>
            <p className="font-mono text-xs" style={{ color: '#6a9955' }}>
              {p.updated}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-10" />

          {/* Sections */}
          <div className="space-y-10">

            <section>
              <h2 className="font-mono font-bold text-sm mb-3" style={{ color: '#dcdcaa' }}>{p.s1title}</h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#9cdcfe' }}>{p.s1body}</p>
            </section>

            <section>
              <h2 className="font-mono font-bold text-sm mb-3" style={{ color: '#dcdcaa' }}>{p.s2title}</h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#9cdcfe' }}>{p.s2body}</p>
            </section>

            <section>
              <h2 className="font-mono font-bold text-sm mb-3" style={{ color: '#dcdcaa' }}>{p.s3title}</h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#9cdcfe' }}>{p.s3body}</p>
            </section>

            <section>
              <h2 className="font-mono font-bold text-sm mb-3" style={{ color: '#dcdcaa' }}>{p.s4title}</h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#9cdcfe' }}>{p.s4body}</p>
            </section>

            <section>
              <h2 className="font-mono font-bold text-sm mb-3" style={{ color: '#dcdcaa' }}>{p.s5title}</h2>
              <ul className="space-y-2 mb-4">
                {p.s5items.map((item, i) => (
                  <li key={i} className="font-mono text-sm flex items-start gap-2" style={{ color: '#9cdcfe' }}>
                    <span style={{ color: '#4ec9b0' }} className="flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-sm" style={{ color: '#6a9955' }}>{p.s5contact}</p>
            </section>

            <section>
              <h2 className="font-mono font-bold text-sm mb-3" style={{ color: '#dcdcaa' }}>{p.s6title}</h2>
              <p className="font-mono text-sm leading-relaxed" style={{ color: '#9cdcfe' }}>{p.s6body}</p>
            </section>

          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
