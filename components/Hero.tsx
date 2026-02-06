'use client'

import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Download, Github } from 'lucide-react'

// Lazy load 3D scene for better performance
const Hero3DScene = lazy(() => import('./three/Hero3DScene'))

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="animate-pulse text-neon-blue">Loading 3D Scene...</div>
          </div>
        }>
          <Hero3DScene />
        </Suspense>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full glass border border-neon-blue/30 mb-6"
            >
              <span className="text-neon-blue text-sm font-semibold">
                🤖 Next-Gen AI Technology
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-orbitron)] mb-6">
              <span className="text-glow bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
                AI Assistant
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto"
          >
            Intelligent Automation Companion
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          >
            Voice powered AI desktop assistant with smart automation and real-time conversation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Main Download Button */}
            <a
              href="#download"
              className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-pink transition-all duration-300 neon-glow hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Download size={20} />
                <span className="font-semibold">Download Now</span>
              </div>
            </a>

            <a
              href="https://github.com/satyam-gurjar/AI_Assistant"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-lg glass border border-white/20 hover:border-neon-blue hover:neon-glow transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-2">
                <Github size={20} />
                <span className="font-semibold">View on GitHub</span>
              </div>
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="mt-20"
          >
            <div className="w-6 h-10 border-2 border-neon-blue/50 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
