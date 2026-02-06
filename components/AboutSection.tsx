'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass border border-neon-cyan/30 mb-6"
          >
            <span className="text-neon-cyan text-sm font-semibold">
              👨‍💻 ABOUT THE PROJECT
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Mission & Vision
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl glass-strong border border-white/20">
              <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-4 text-neon-blue">
                What is AI Assistant?
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                This AI Assistant provides voice interaction, automation workflows, and intelligent 
                response generation powered by modern AI APIs. It combines the power of natural language 
                processing with desktop automation to create a seamless user experience.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Built with Python and PySide6, it offers a native desktop experience with advanced 
                features like voice recognition, AI-powered conversations, and secure API integration. 
                The application is packaged as a standalone executable, requiring no Python installation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl glass border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
                <div className="text-sm text-gray-400">Open Source</div>
              </div>
              <div className="p-6 rounded-xl glass border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">MIT</div>
                <div className="text-sm text-gray-400">License</div>
              </div>
              <div className="p-6 rounded-xl glass border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">3+</div>
                <div className="text-sm text-gray-400">Platforms</div>
              </div>
              <div className="p-6 rounded-xl glass border border-white/10 text-center">
                <div className="text-3xl font-bold text-neon-pink mb-2">AI</div>
                <div className="text-sm text-gray-400">Powered</div>
              </div>
            </div>
          </motion.div>

          {/* Right - Developer Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Developer Card */}
            <div className="p-8 rounded-2xl glass-strong border border-white/20 relative overflow-hidden group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                {/* Avatar placeholder */}
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple mx-auto mb-6 flex items-center justify-center text-4xl font-bold neon-glow">
                  SG
                </div>

                <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] text-center mb-2">
                  Satyam Gurjar
                </h3>
                <p className="text-gray-400 text-center mb-6">
                  Full Stack Developer & AI Enthusiast
                </p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://github.com/satyam-gurjar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg glass border border-white/10 hover:border-neon-blue hover:neon-glow transition-all group/link"
                  >
                    <Github size={24} className="group-hover/link:text-neon-blue transition-colors" />
                  </a>
                  <a
                    href="#"
                    className="p-3 rounded-lg glass border border-white/10 hover:border-neon-cyan hover:neon-glow transition-all group/link"
                  >
                    <Linkedin size={24} className="group-hover/link:text-neon-cyan transition-colors" />
                  </a>
                  <a
                    href="mailto:contact@example.com"
                    className="p-3 rounded-lg glass border border-white/10 hover:border-neon-purple hover:neon-glow-purple transition-all group/link"
                  >
                    <Mail size={24} className="group-hover/link:text-neon-purple transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <a
                href="https://github.com/satyam-gurjar/AI_Assistant"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass border border-white/10 hover:border-neon-blue hover:neon-glow transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <Github size={20} />
                  <span>View Source Code</span>
                </div>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/satyam-gurjar/AI_Assistant/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass border border-white/10 hover:border-neon-purple hover:neon-glow-purple transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">🐛</span>
                  <span>Report Issues</span>
                </div>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://github.com/satyam-gurjar/AI_Assistant/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass border border-white/10 hover:border-neon-cyan hover:neon-glow transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">💬</span>
                  <span>Join Discussion</span>
                </div>
                <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Contribution CTA */}
            <div className="p-6 rounded-xl glass-strong border border-neon-blue/30">
              <h4 className="text-lg font-bold mb-2">Contribute to the Project</h4>
              <p className="text-sm text-gray-400 mb-4">
                We welcome contributions! Fork the repository, submit pull requests, 
                or share your ideas to help improve AI Assistant.
              </p>
              <a
                href="https://github.com/satyam-gurjar/AI_Assistant/fork"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-pink transition-all text-sm font-semibold"
              >
                <span>Fork on GitHub</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"
        />
      </div>
    </section>
  )
}
