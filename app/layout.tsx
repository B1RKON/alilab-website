import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'aliLab Interactive Technologies',
  description:
    'AI, IoT, Cross-Platform ve Real-Time yazılım çözümleri. CXD projesiyle kanıtlanmış teknoloji.',
  keywords: ['aliLab', 'AI', 'IoT', 'BLE', 'Unity WebGL', 'Next.js', 'yazılım', 'software'],
  openGraph: {
    title: 'aliLab Interactive Technologies',
    description: 'Yazılımın geleceğini bugün inşa ediyoruz.',
    url: 'https://www.alilab.com.tr',
    siteName: 'aliLab',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
