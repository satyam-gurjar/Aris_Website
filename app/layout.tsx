import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'AI Assistant - Intelligent Automation Companion',
  description: 'Voice powered AI desktop assistant with smart automation and real-time conversation. Built with Python, OpenAI GPT-4, and advanced voice recognition.',
  keywords: ['AI Assistant', 'Voice Recognition', 'Desktop Automation', 'AI Chat', 'OpenAI', 'GPT-4', 'Python', 'Voice Assistant'],
  authors: [{ name: 'Satyam Gurjar' }],
  creator: 'Satyam Gurjar',
  publisher: 'Satyam Gurjar',
  openGraph: {
    title: 'AI Assistant - Intelligent Automation Companion',
    description: 'Voice powered AI desktop assistant with smart automation and real-time conversation.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AI Assistant',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Assistant - Intelligent Automation Companion',
    description: 'Voice powered AI desktop assistant with smart automation and real-time conversation.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
