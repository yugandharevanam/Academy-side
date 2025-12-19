import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, ClockIcon, ShieldCheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { Card } from '../components/Card'
import backgroundVideo from '../assets/background.mp4'

export const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null)

  useEffect(() => {
    // Delay video download until after initial paint to improve hero load time.
    const timeout = window.setTimeout(() => {
      setVideoSrc(backgroundVideo)
    }, 150)

    return () => {
      window.clearTimeout(timeout)
    }
  }, [])

  const scrollToNext = () => {
    document.getElementById('p2p')?.scrollIntoView({ behavior: 'smooth' })
  }

  const benefits = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Better Insights',
      description: 'Real-time data and analytics for informed decision-making'
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'Streamlined workflows and automated processes save time'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Data Integrity',
      description: 'Single source of truth ensures accuracy across departments'
    }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/75 via-gray-900/70 to-green-900/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 px-2">
              <span className="text-white drop-shadow-2xl">Enterprise Resource Planning</span>
              <br />
              <span className="text-white drop-shadow-2xl">Simplifying How Businesses Work</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed drop-shadow-lg px-4"
          >
            Whether you're an engineering student curious how real-world companies run, or a business owner
            seeking to work smarter, ERP is a cornerstone technology.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-white/85 mb-8 sm:mb-12 drop-shadow-lg px-4"
          >
            This site will demystify ERP – from core processes to implementation – and show why it's crucial
            for efficiency and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 px-4"
          >
            <button
              onClick={scrollToNext}
              className="bg-white text-brand-primary hover:bg-gray-100 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
            >
              Start Learning
            </button>
            <a
              href="https://www.evanam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm text-sm sm:text-base"
            >
              Contact Evanam
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 px-2"
          >
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                title={benefit.title}
                icon={benefit.icon}
                delay={0.2 * index}
                className="bg-white/95 backdrop-blur-sm"
              >
                <p className="text-sm sm:text-base">{benefit.description}</p>
              </Card>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <button
              onClick={scrollToNext}
              className="animate-bounce-subtle text-white hover:text-green-300 transition-colors"
              aria-label="Scroll to next section"
            >
              <ChevronDownIcon className="w-8 h-8 mx-auto" />
            </button>
          </motion.div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-xs sm:text-sm text-white/90 drop-shadow-lg"
          >
            <p className="mb-2">53% of organizations report a positive ROI from ERP implementations</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
