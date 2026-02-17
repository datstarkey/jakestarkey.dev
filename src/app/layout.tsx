import type { Metadata } from 'next'
import { Syne, JetBrains_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Jake Starkey — Systems Architect',
  description:
    'CEO of Starkey Digital. Systems architect with 10+ years of experience building and scaling high-performance systems. Preferred stack: Svelte, SvelteKit, ASP.NET Core. Strong in Kubernetes, GitOps, and cloud-native infrastructure.',
  keywords: [
    'Jake Starkey',
    'Systems Architect',
    'Starkey Digital',
    'Svelte',
    'SvelteKit',
    'ASP.NET Core',
    'Kubernetes',
    'GitOps',
    'High-Performance Systems',
    'North West UK',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${jetbrainsMono.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
