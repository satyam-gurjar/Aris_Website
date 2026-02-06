'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'

interface TechItem {
  name: string
  category: string
  color: string
  description: string
}

const techStack: TechItem[] = [
  {
    name: 'Python',
    category: 'Core Language',
    color: 'from-blue-400 to-yellow-400',
    description: 'Powerful backend logic',
  },
  {
    name: 'PySide6',
    category: 'UI Framework',
    color: 'from-green-400 to-green-600',
    description: 'Native desktop interface',
  },
  {
    name: 'OpenAI API',
    category: 'AI Engine',
    color: 'from-purple-400 to-pink-500',
    description: 'GPT-powered intelligence',
  },
  {
    name: 'SpeechRecognition',
    category: 'Voice Input',
    color: 'from-red-400 to-orange-500',
    description: 'Voice command processing',
  },
  {
    name: 'PyInstaller',
    category: 'Packaging',
    color: 'from-cyan-400 to-blue-500',
    description: 'Standalone executables',
  },
  {
    name: 'GitHub Actions',
    category: 'CI/CD',
    color: 'from-gray-600 to-gray-800',
    description: 'Automated deployment',
  },
]

function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, scale: 0.8, rotateY: -90 },
        visible: {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            type: 'spring',
            stiffness: 100,
          },
        },
      }}
      whileHover={{
        scale: 1.1,
        rotateY: 10,
        z: 50,
        transition: { duration: 0.3 },
      }}
      className="group relative perspective-1000"
    >
      {/* Glowing background */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative p-6 rounded-2xl glass-strong border border-white/20 group-hover:border-neon-blue/50 transition-all duration-300 h-full flex flex-col items-center text-center">
        {/* Icon placeholder with gradient */}
        <div className={`w-20 h-20 mb-4 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-3xl font-bold text-white neon-glow group-hover:scale-110 transition-transform duration-300`}>
          {tech.name.slice(0, 2)}
        </div>

        {/* Tech name */}
        <h3 className="text-xl font-bold font-[family-name:var(--font-orbitron)] mb-2 group-hover:text-neon-blue transition-colors">
          {tech.name}
        </h3>

        {/* Category */}
        <div className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-gray-400 mb-3">
          {tech.category}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 flex-grow">
          {tech.description}
        </p>

        {/* Animated corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-blue/0 group-hover:border-neon-blue/70 rounded-tl-2xl transition-all duration-500" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-purple/0 group-hover:border-neon-purple/70 rounded-br-2xl transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent" />

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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass border border-neon-purple/30 mb-6"
          >
            <span className="text-neon-purple text-sm font-semibold">
              🧠 TECHNOLOGY STACK
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-6">
            <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
              Built with Modern Tech
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Powered by industry-leading frameworks and cutting-edge AI technology
            for maximum performance and reliability.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <TechCard key={tech.name} tech={tech} index={index} />
          ))}
        </div>

        {/* Architecture Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="relative p-10 rounded-2xl glass-strong border border-white/20 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-purple/10 rounded-full blur-3xl" />

          <div className="relative">
            <h3 className="text-3xl font-bold font-[family-name:var(--font-orbitron)] mb-6 text-center">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Architecture Highlights
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-xl font-bold mb-2">Lightning Fast</h4>
                <p className="text-gray-400 text-sm">
                  Optimized native performance with efficient resource management
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-bold mb-2">Secure by Design</h4>
                <p className="text-gray-400 text-sm">
                  Encrypted API keys and secure data handling throughout
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-xl font-bold mb-2">Continuous Updates</h4>
                <p className="text-gray-400 text-sm">
                  Automated CI/CD pipeline for seamless deployment
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Integration badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {[
            'MIT Licensed',
            'Open Source',
            'Active Development',
            'Community Driven',
          ].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              className="px-4 py-2 rounded-full glass border border-white/10 text-sm text-gray-400 hover:border-neon-blue/50 hover:text-neon-blue transition-all cursor-default"
            >
              {badge}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
