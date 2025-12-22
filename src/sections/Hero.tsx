import { motion } from 'framer-motion'
import { ChartBarIcon, ClockIcon, ShieldCheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import SplitText from '../Animation/Split_Text'
import LiquidEther from '../Animation/LiquidEther'
import TypewriterText from '../Animation/TypewriterText'
import MagneticButton from '../Animation/MagneticButton'
import FloatingCard from '../Animation/FloatingCard'

export const Hero = () => {

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Liquid Ether Background with Mouse Interaction */}
      <div className="absolute inset-0 w-full h-full" style={{ position: 'absolute', width: '100%', height: '100%' }}>
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/40 pointer-events-none" />
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

          {/* Subheadline with Typewriter */}
          <div className="mb-8 sm:mb-10 min-h-[80px] sm:min-h-[100px] flex items-center justify-center">
            <TypewriterText
              text={[
                "Automate operations. Never miss a sale.",
                "Boost revenue by 40%. Reduce costs by 70%.",
                "One integrated system for your entire business."
              ]}
              typingSpeed={80}
              deletingSpeed={50}
              delayBetweenTexts={3000}
              loop={true}
              cursor={true}
              cursorChar="|"
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 font-medium drop-shadow-lg"
            />
          </div>

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-14"
          >
            <MagneticButton
              strength={0.4}
              onClick={scrollToNext}
              className="bg-white text-slate-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-2xl text-base"
            >
              Explore Solutions
            </MagneticButton>
            <MagneticButton
              strength={0.4}
              onClick={() => window.open('https://www.evanam.com', '_blank')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-3 px-8 rounded-full backdrop-blur-sm text-base"
            >
              Get Free Demo
            </MagneticButton>
          </motion.div>

          {/* Benefit Cards with Floating Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <FloatingCard
                key={benefit.title}
                floatIntensity={15}
                duration={3 + index * 0.5}
                delay={index * 0.2}
                hoverEffect={true}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-lg"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-white">{benefit.icon}</div>
                    <h3 className="font-bold text-white text-base">{benefit.title}</h3>
                  </div>
                  <p className="text-sm text-white/80">{benefit.description}</p>
                </motion.div>
              </FloatingCard>
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
