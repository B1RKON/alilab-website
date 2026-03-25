'use client'

import { useEffect } from 'react'

const SFX_COUNT = 6
const SFX_PATHS = Array.from({ length: SFX_COUNT }, (_, i) => `/glitch_sfx_${i + 1}.WAV`)

// Preload all audio elements once
let audioPool: HTMLAudioElement[] | null = null
let lastIndex = -1

function getPool(): HTMLAudioElement[] {
  if (!audioPool) {
    audioPool = SFX_PATHS.map(src => {
      const a = new Audio(src)
      a.volume = 0.45
      a.preload = 'auto'
      return a
    })
  }
  return audioPool
}

function playGlitch() {
  try {
    const pool = getPool()
    // Pick random index, never repeat the last one
    let idx: number
    do { idx = Math.floor(Math.random() * SFX_COUNT) } while (idx === lastIndex)
    lastIndex = idx

    if ((window as Window & { glitchMuted?: boolean }).glitchMuted) return
    const audio = pool[idx]
    audio.currentTime = 0
    audio.play().catch(() => {/* autoplay policy — silent fail */})
  } catch { /* silent fail */ }
}

const TEXT_TAGS = new Set(['P', 'H1', 'H2', 'H3', 'H4', 'SPAN', 'A', 'BUTTON', 'LI'])

export default function GlitchEffect() {
  useEffect(() => {
    // Preload all SFX immediately on mount so first hover has zero delay
    getPool()

    let cooldown = false

    function trigger(target: HTMLElement, imgMode: boolean) {
      if (cooldown) return
      cooldown = true

      const cls = imgMode ? 'glitch-img-active' : 'glitch-active'
      target.classList.add(cls)
      playGlitch()

      setTimeout(() => target.classList.remove(cls), 380)
      setTimeout(() => { cooldown = false }, 500)
    }

    function handleMouseOver(e: MouseEvent) {
      const target = e.target as HTMLElement
      if (!target) return

      // Image (logo) glitch
      if (target.tagName === 'IMG') {
        trigger(target, true)
        return
      }

      // Text element glitch
      if (!TEXT_TAGS.has(target.tagName)) return
      const text = target.textContent?.trim() ?? ''
      if (text.length < 2) return
      trigger(target, false)
    }

    document.addEventListener('mouseover', handleMouseOver)
    return () => document.removeEventListener('mouseover', handleMouseOver)
  }, [])

  return null
}
