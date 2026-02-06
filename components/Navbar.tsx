'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Github, Download } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Demo', href: '#demo' },
    { name: 'Download', href: '#download' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'About', href: '#about' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl font-[family-name:var(--font-orbitron)]">AI</span>
            </div>
            <span className="text-xl font-bold font-[family-name:var(--font-orbitron)] hidden sm:block">
              AI Assistant
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#download"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-pink transition-all font-semibold neon-glow hover:scale-105"
            >
              <Download size={18} />
              <span>Download</span>
            </a>
            <a
              href="https://github.com/satyam-gurjar/AI_Assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-neon-blue/30 hover:border-neon-blue hover:neon-glow transition-all"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-strong border-t border-white/10"
        >
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-gray-300 hover:text-neon-blue transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-pink transition-all font-semibold neon-glow"
            >
              <Download size={20} />
              <span>Download Now</span>
            </a>
            <a
              href="https://github.com/satyam-gurjar/AI_Assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg glass border border-neon-blue/30 hover:border-neon-blue transition-all w-full justify-center"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
