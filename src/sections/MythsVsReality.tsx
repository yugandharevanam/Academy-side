import { motion } from 'framer-motion'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import ParticleField from '../Animation/ParticleField'
import ShimmerButton from '../Animation/ShimmerButton'

const myths = [
  {
    myth: 'Business systems will slow down our sales team',
    reality: 'Top Indian companies like Reliance and Tata use integrated systems to SPEED UP sales by 40%',
    icon: '📈'
  },
  {
    myth: 'Too expensive for small and medium businesses',
    reality: 'Modern cloud solutions start at ₹15,000/month with ROI in 6-12 months',
    icon: '💰'
  },
  {
    myth: 'Too complicated - our team will never learn it',
    reality: 'Today\'s platforms are as intuitive as WhatsApp - most teams adapt in 2-3 weeks',
    icon: '📱'
  },
  {
    myth: 'We\'ll lose control of our data and processes',
    reality: 'You gain MORE control with real-time visibility across all departments',
    icon: '🎯'
  },
  {
    myth: 'Only needed by manufacturing companies',
    reality: 'Used by retail, services, healthcare, education - any business with operations',
    icon: '🏢'
  },
  {
    myth: 'Implementation will disrupt our business for months',
    reality: 'Phased rollouts let you continue operations - go live in 8-12 weeks',
    icon: '⚡'
  }
]

export const MythsVsReality = () => {
  return (
    <section id="myths" className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden">
      {/* Particle Field Background */}
      <ParticleField
        particleCount={60}
        particleColor="rgba(139, 92, 246, 0.6)"
        lineColor="rgba(139, 92, 246, 0.2)"
        particleSize={2}
        maxDistance={120}
        speed={0.3}
        className="opacity-40"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="text-red-400">Common Misconceptions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Myths vs Reality
            </h2>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg">
              Let's clear up the biggest misconceptions about integrated business systems in the Indian market
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myths.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-lg border border-slate-700/50 overflow-hidden hover:shadow-2xl hover:border-purple-500/50 transition-all"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Myth */}
                <div className="mb-4 pb-4 border-b border-red-500/20">
                  <div className="flex items-start gap-2 mb-2">
                    <XCircleIcon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wide">Myth</div>
                  </div>
                  <p className="text-sm text-slate-300 italic">"{item.myth}"</p>
                </div>

                {/* Reality */}
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">Reality</div>
                  </div>
                  <p className="text-sm text-white font-medium">{item.reality}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center bg-gradient-to-r from-purple-900/50 to-emerald-900/50 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-slate-200 mb-6 max-w-2xl mx-auto">
            Get a free consultation with Evanam experts. We'll show you exactly how integrated systems can boost your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ShimmerButton
              background="linear-gradient(135deg, #10B981 0%, #059669 100%)"
              shimmerColor="rgba(255, 255, 255, 0.6)"
              shimmerDuration="2s"
              onClick={() => window.open('https://www.evanam.com', '_blank')}
              className="px-8 py-3 text-white font-bold rounded-full shadow-lg text-base"
            >
              Schedule Free Consultation
            </ShimmerButton>
            <ShimmerButton
              background="linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)"
              shimmerColor="rgba(255, 255, 255, 0.6)"
              shimmerDuration="2.5s"
              onClick={() => document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 text-white font-bold rounded-full shadow-lg text-base"
            >
              Calculate Your ROI
            </ShimmerButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
