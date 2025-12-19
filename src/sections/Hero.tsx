import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, ClockIcon, ShieldCheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import backgroundVideo from '../assets/background.mp4'
import SplitText from '../Animation/Split_Text'

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
    document.getElementById('myths')?.scrollIntoView({ behavior: 'smooth' })
  }

  const benefits = [
    {
      icon: <ChartBarIcon className="w-6 h-6" />,
      title: '+40% Revenue',
      description: 'Real-time inventory tracking'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: '70% Less Manual Work',
      description: 'Automated workflows'
    },
    {
      icon: <ShieldCheckIcon className="w-6 h-6" />,
      title: 'One System',
      description: 'Entire business connected'
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
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <div className="mb-8 sm:mb-10">
            <SplitText
              text="Grow Your Sales & Scale Your Business"
              tag="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-2xl leading-tight"
              delay={40}
              duration={0.7}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 50, rotateX: -45 }}
              to={{ opacity: 1, y: 0, rotateX: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="center"
            />
          </div>

          {/* Subheadline */}
          <div className="mb-8 sm:mb-10">
            <SplitText
              text="Automate operations. Never miss a sale. Boost revenue by 40%."
              tag="p"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium drop-shadow-lg"
              delay={30}
              duration={0.6}
              ease="power2.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-60px"
              textAlign="center"
            />
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-14"
          >
            <button
              onClick={scrollToNext}
              className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-2xl text-base"
            >
              Explore Solutions
            </button>
            <a
              href="https://www.evanam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 backdrop-blur-sm text-base"
            >
              Get Free Demo
            </a>
          </motion.div>

          {/* Benefit Cards - Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-white">{benefit.icon}</div>
                  <h3 className="font-bold text-white text-base">{benefit.title}</h3>
                </div>
                <p className="text-sm text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.0 }}
            className="mt-12"
          >
            <button
              onClick={scrollToNext}
              className="animate-bounce text-white/70 hover:text-white transition-colors"
              aria-label="Scroll to next section"
            >
              <ChevronDownIcon className="w-7 h-7 mx-auto" />
            </button>
          </motion.div>
        </div>

        {/* Bottom Trust Badge */}
        <div className="absolute bottom-6 left-0 right-0 text-center z-10 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-xs sm:text-sm text-white/80 font-medium"
          >
            Trusted by Tata, Reliance, Infosys & 73% of Fortune 500
          </motion.div>
        </div>
      </div>
    </section>
  )
}
