'use client'

import { motion } from 'framer-motion'
import { Github, Heart, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Demo', href: '#demo' },
      { name: 'Download', href: '#download' },
      { name: 'Tech Stack', href: '#tech' },
    ],
    Resources: [
      { name: 'Documentation', href: 'https://github.com/satyam-gurjar/AI_Assistant#readme' },
      { name: 'Releases', href: 'https://github.com/satyam-gurjar/AI_Assistant/releases' },
      { name: 'Issues', href: 'https://github.com/satyam-gurjar/AI_Assistant/issues' },
      { name: 'Discussions', href: 'https://github.com/satyam-gurjar/AI_Assistant/discussions' },
    ],
    Community: [
      { name: 'GitHub', href: 'https://github.com/satyam-gurjar/AI_Assistant' },
      { name: 'Contribute', href: 'https://github.com/satyam-gurjar/AI_Assistant/fork' },
      { name: 'Star on GitHub', href: 'https://github.com/satyam-gurjar/AI_Assistant' },
      { name: 'Report Bug', href: 'https://github.com/satyam-gurjar/AI_Assistant/issues/new' },
    ],
  }

  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0f]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-xl font-[family-name:var(--font-orbitron)]">AI</span>
              </div>
              <span className="text-xl font-bold font-[family-name:var(--font-orbitron)]">
                AI Assistant
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-sm">
              Voice powered AI desktop assistant with smart automation and real-time conversation. 
              Open source and free forever.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/satyam-gurjar/AI_Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass border border-white/10 hover:border-neon-blue hover:neon-glow transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://github.com/satyam-gurjar/AI_Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass border border-white/10 hover:border-neon-purple hover:neon-glow-purple transition-all flex items-center space-x-2"
              >
                <Heart size={20} />
                <span className="text-sm">Star</span>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-bold font-[family-name:var(--font-orbitron)] mb-4 text-neon-blue">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-400 hover:text-neon-blue transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {new Date().getFullYear()} AI Assistant. Built with{' '}
                <Heart size={14} className="inline text-red-500" /> by{' '}
                <a
                  href="https://github.com/satyam-gurjar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-blue hover:text-neon-cyan transition-colors"
                >
                  Satyam Gurjar
                </a>
              </p>
              <p className="mt-1">
                Licensed under{' '}
                <a
                  href="https://github.com/satyam-gurjar/AI_Assistant/blob/main/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-purple hover:text-neon-pink transition-colors"
                >
                  MIT License
                </a>
              </p>
            </div>

            {/* Tech Stack Badge */}
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with</span>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-1 rounded glass text-xs">Next.js</span>
                <span className="px-2 py-1 rounded glass text-xs">React</span>
                <span className="px-2 py-1 rounded glass text-xs">Three.js</span>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-lg glass border border-white/10 hover:border-neon-blue hover:neon-glow transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            This is an open-source project. Contributions, issues, and feature requests are welcome!
          </p>
        </div>
      </div>
    </footer>
  )
}
