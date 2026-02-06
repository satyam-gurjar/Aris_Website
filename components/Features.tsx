'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Mic, MessageSquare, Monitor, Shield, Package, Cpu } from 'lucide-react'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const features: Feature[] = [
  {
    icon: <Mic size={32} />,
    title: 'Voice Recognition',
    description: 'Advanced speech-to-text with natural language processing for seamless voice commands.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: <MessageSquare size={32} />,
    title: 'AI Chat Assistant',
    description: 'Intelligent conversational AI powered by OpenAI for contextual responses and assistance.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: <Monitor size={32} />,
    title: 'GUI Desktop Interface',
    description: 'Beautiful native desktop application built with PySide6 for intuitive user experience.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure API Integration',
    description: 'Enterprise-grade security with encrypted API key management and secure communications.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: <Package size={32} />,
    title: 'Offline Executable',
    description: 'Standalone executable packages with PyInstaller - no Python installation required.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: <Cpu size={32} />,
    title: 'Cross Platform',
    description: 'Runs seamlessly on Windows, macOS, and Linux with native performance optimization.',
    color: 'from-indigo-500 to-purple-500',
  },
]

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
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
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.1,
          },
        },
      }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative"
    >
      {/* Glowing border effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
      
      {/* Card content */}
      <div className="relative h-full p-8 rounded-xl glass border border-white/10 group-hover:border-white/20 transition-all duration-300">
        {/* Icon with gradient */}
        <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${feature.color} mb-6 neon-glow group-hover:scale-110 transition-transform duration-300`}>
          {feature.icon}
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-4 group-hover:text-neon-blue transition-colors">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          {feature.description}
        </p>

        {/* Animated corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-neon-blue/0 group-hover:border-neon-blue/50 rounded-tr-xl transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-neon-purple/0 group-hover:border-neon-purple/50 rounded-bl-xl transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent" />
      
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
              ⚡ POWERFUL FEATURES
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-6">
            <span className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
              Next-Generation Capabilities
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of desktop automation with cutting-edge AI technology
            and intelligent voice interaction.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isInView ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 h-px bg-gradient-to-r from-transparent via-neon-blue to-transparent"
        />
      </div>
    </section>
  )
}
