'use client'

import { useEffect, useRef, Suspense, lazy } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Play, Monitor } from 'lucide-react'

// Lazy load 3D mockup for performance
const AppMockup3D = lazy(() => import('./three/AppMockup3D'))

export default function DemoPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section id="demo" className="relative py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
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
              🎬 SEE IT IN ACTION
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-orbitron)] mb-6">
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text text-transparent">
              Experience the Future
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch how AI Assistant transforms your desktop workflow with intelligent automation
          </p>
        </motion.div>

        {/* 3D Mockup Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-[500px] md:h-[600px] mb-16"
        >
          {/* 3D Scene */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden glass border border-white/10">
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-pulse text-neon-blue">Loading 3D Preview...</div>
              </div>
            }>
              <AppMockup3D />
            </Suspense>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-10 left-10 p-4 rounded-lg glass border border-neon-blue/30 hidden md:block"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse" />
              <span className="text-sm">Voice Active</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-10 right-10 p-4 rounded-lg glass border border-neon-purple/30 hidden md:block"
          >
            <div className="flex items-center space-x-2">
              <Monitor size={20} className="text-neon-purple" />
              <span className="text-sm">AI Processing</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'Real-time Response',
              description: 'Instant AI feedback with sub-second latency',
              icon: '⚡',
            },
            {
              title: 'Natural Conversation',
              description: 'Context-aware dialogue for human-like interaction',
              icon: '💬',
            },
            {
              title: 'Smart Automation',
              description: 'Intelligent task execution and workflow optimization',
              icon: '🤖',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-xl glass border border-white/10 hover:border-neon-blue/30 transition-all group"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold font-[family-name:var(--font-orbitron)] mb-2 group-hover:text-neon-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Video/Screenshot Carousel Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative aspect-video rounded-lg glass border border-white/10 overflow-hidden group cursor-pointer"
              >
                {/* Placeholder for screenshots */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                  <Play size={40} className="text-white/50 group-hover:text-white group-hover:scale-125 transition-all" />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
