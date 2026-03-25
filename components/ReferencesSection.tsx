'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const TECH_TAGS = ['Next.js 14', 'Supabase', 'IoT', 'BLE', 'Unity WebGL', 'TÜBİTAK 1507']

export default function ReferencesSection() {
  const { t } = useLanguage()

  return (
    <section id="references" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-alilab-purple text-sm tracking-[0.2em] uppercase mb-4 block">
            {'// references'}
          </span>
          <h2 className="font-mono text-3xl md:text-5xl font-bold mb-4" style={{ color: '#c678dd' }}>
            {t.references.title}
          </h2>
          {t.references.subtitle && (
            <p className="font-mono text-lg max-w-xl mx-auto" style={{ color: '#9cdcfe' }}>
              {t.references.subtitle}
            </p>
          )}
        </div>

        {/* CXD Reference Card */}
        <div className="relative group bg-white/[0.03] backdrop-blur-sm border border-alilab-purple/20 rounded-3xl p-8 md:p-10 hover:border-alilab-purple/40 hover:bg-white/[0.05] transition-all duration-300 hover:shadow-[0_0_60px_rgba(155,89,182,0.1)]">
          {/* Glow blob */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-alilab-purple/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row gap-8 items-start md:items-center">
            {/* Logo column */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-alilab-purple/20 blur-xl" />
                <Image
                  src="/cxd-logo.png"
                  alt="Cinema X Dimension"
                  width={100}
                  height={100}
                  className="relative rounded-2xl border border-alilab-purple/30"
                />
              </div>
              {/* TÜBİTAK badge */}
              <span className="font-mono text-[10px] px-3 py-1 rounded-full border border-alilab-orange/40 text-alilab-orange bg-alilab-orange/5">
                TÜBİTAK 1507
              </span>
            </div>

            {/* Content column */}
            <div className="flex-1">
              <h3 className="font-mono text-2xl md:text-3xl font-bold mb-3" style={{ color: '#dcdcaa' }}>
                {t.references.cxd_name}
              </h3>
              <p className="font-mono leading-relaxed mb-6 text-sm md:text-base" style={{ color: '#d4d4d4' }}>
                {t.references.cxd_desc}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {TECH_TAGS.map((tag, i) => {
                  const colors = [
                    'bg-alilab-cyan/10 text-alilab-cyan border-alilab-cyan/20',
                    'bg-alilab-purple/10 text-alilab-purple border-alilab-purple/20',
                    'bg-alilab-green/10 text-alilab-green border-alilab-green/20',
                    'bg-alilab-orange/10 text-alilab-orange border-alilab-orange/20',
                    'bg-alilab-red/10 text-alilab-red border-alilab-red/20',
                    'bg-white/10 text-white border-white/20',
                  ]
                  return (
                    <span
                      key={tag}
                      className={`font-mono text-xs px-3 py-1 rounded-full border ${colors[i % colors.length]}`}
                    >
                      {tag}
                    </span>
                  )
                })}
              </div>

              {/* Visit link */}
              <a
                href="https://cinemaxdimension.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-alilab-purple/20 border border-alilab-purple/40 text-white text-sm font-semibold hover:bg-alilab-purple/30 hover:border-alilab-purple/60 transition-all duration-200 group/link"
              >
                {t.references.visit}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
