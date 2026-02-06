'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Download, Github, Apple, Monitor } from 'lucide-react'
import { detectOS } from '@/lib/detectOS'

interface DownloadOption {
  os: string
  osKey: 'windows' | 'macos' | 'linux'
  icon: React.ReactNode
  color: string
  description: string
  downloadUrl: string
}

const downloadOptions: DownloadOption[] = [
  {
    os: 'Windows',
    osKey: 'windows',
    icon: <Monitor size={40} />,
    color: 'from-blue-500 to-blue-700',
    description: 'Windows 10/11 (64-bit)',
    downloadUrl:
      'https://github.com/satyam-gurjar/AI_Assistant/releases/latest/download/AIAssistant-windows-x64.zip',
  },
  {
    os: 'macOS',
    osKey: 'macos',
    icon: <Apple size={40} />,
    color: 'from-gray-500 to-gray-700',
    description: 'macOS 10.15 or later',
    downloadUrl:
      'https://github.com/satyam-gurjar/AI_Assistant/releases/latest/download/AIAssistant-macos-x64.zip',
  },
  {
    os: 'Linux',
    osKey: 'linux',
    icon: <Monitor size={40} />,
    color: 'from-orange-500 to-red-500',
    description: 'Ubuntu, Debian, Fedora',
    downloadUrl:
      'https://github.com/satyam-gurjar/AI_Assistant/releases/latest/download/AIAssistant-linux-x64.tar.gz',
  },


]

function DownloadCard({ option, index, isDetected }: { option: DownloadOption; index: number; isDetected: boolean }) {
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            delay: index * 0.15,
          },
        },
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative"
    >
      {/* Glowing effect - stronger for detected OS */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl blur-xl transition-opacity duration-500 ${
        isDetected ? 'opacity-75' : 'opacity-0 group-hover:opacity-75'
      }`} />
      
      {/* Detected OS badge */}
      {isDetected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan text-xs font-bold neon-glow">
            Your OS
          </span>
        </div>
      )}
      
      {/* Card */}
      <div className={`relative p-8 rounded-2xl glass-strong border transition-all duration-300 ${
        isDetected 
          ? 'border-neon-blue/70 shadow-lg shadow-neon-blue/20' 
          : 'border-white/20 group-hover:border-neon-blue/50'
      }`}>
        {/* Icon */}
        <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-br ${option.color} mb-6 group-hover:scale-110 transition-transform duration-300 neon-glow`}>
          {option.icon}
        </div>

        {/* OS Name */}
        <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-2">
          {option.os}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          {option.description}
        </p>

        {/* Download Button */}
        <a
          href={option.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center space-x-2 w-full py-4 rounded-lg transition-all duration-300 font-semibold ${
            isDetected
              ? 'bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-cyan animate-pulse-slow'
              : 'bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-cyan hover:to-neon-pink'
          }`}
        >
          <Download size={20} />
          <span>{isDetected ? 'Download Now' : 'Download'}</span>
        </a>

        {/* Version info */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Latest Release
        </div>
      </div>
    </motion.div>
  )
}

export default function DownloadSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()
  const [detectedOS, setDetectedOS] = useState<string>('unknown')

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  useEffect(() => {
    setDetectedOS(detectOS())
  }, [])

  return (
    <section id="download" className="relative py-32 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass border border-neon-blue/30 mb-6"
          >
            <span className="text-neon-blue text-sm font-semibold">
              📥 GET STARTED NOW
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-6">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent">
              Download AI Assistant
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Get started in minutes. Choose your platform and experience the power of AI automation.
          </p>

          {/* GitHub Link */}
          <motion.a
            href="https://github.com/satyam-gurjar/AI_Assistant/releases"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg glass border border-white/20 hover:border-neon-blue/50 transition-all"
          >
            <Github size={20} />
            <span>View All Releases on GitHub</span>
          </motion.a>
        </motion.div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {downloadOptions.map((option, index) => (
            <DownloadCard 
              key={option.os} 
              option={option} 
              index={index}
              isDetected={option.osKey === detectedOS}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Installation Instructions */}
          <div className="p-8 rounded-2xl glass border border-white/10">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-4 flex items-center">
              <span className="text-3xl mr-3">🚀</span>
              Quick Installation
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">1.</span>
                <span>Download the installer for your operating system</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">2.</span>
                <span>Run the executable file (no Python required)</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">3.</span>
                <span>Configure your OpenAI API key in settings</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-blue mr-2">4.</span>
                <span>Start using voice commands immediately</span>
              </li>
            </ul>
          </div>

          {/* System Requirements */}
          <div className="p-8 rounded-2xl glass border border-white/10">
            <h3 className="text-2xl font-bold font-[family-name:var(--font-orbitron)] mb-4 flex items-center">
              <span className="text-3xl mr-3">⚙️</span>
              System Requirements
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-neon-purple mr-2">•</span>
                <span>4GB RAM minimum (8GB recommended)</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-2">•</span>
                <span>200MB free disk space</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-2">•</span>
                <span>Internet connection for AI features</span>
              </li>
              <li className="flex items-start">
                <span className="text-neon-purple mr-2">•</span>
                <span>Microphone for voice input</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Community CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            Free and open source. Licensed under MIT.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>⭐ Star on GitHub</span>
            <span>•</span>
            <span>🐛 Report Issues</span>
            <span>•</span>
            <span>💡 Request Features</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
