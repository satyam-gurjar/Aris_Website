import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DemoPreview from '@/components/DemoPreview'
import DownloadSection from '@/components/DownloadSection'
import TechStack from '@/components/TechStack'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f]">
      {/* Background effects */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none" />
      
      {/* Content */}
      <Navbar />
      <Hero />
      <Features />
      <DemoPreview />
      <DownloadSection />
      <TechStack />
      <AboutSection />
      <Footer />
    </main>
  )
}
