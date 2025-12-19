import { motion } from 'framer-motion'
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

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
    <section id="myths" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="text-red-700">Common Misconceptions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Myths vs Reality
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
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
              className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>

                {/* Myth */}
                <div className="mb-4 pb-4 border-b border-red-100">
                  <div className="flex items-start gap-2 mb-2">
                    <XCircleIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold text-red-600 uppercase tracking-wide">Myth</div>
                  </div>
                  <p className="text-sm text-slate-700 italic">"{item.myth}"</p>
                </div>

                {/* Reality */}
                <div>
                  <div className="flex items-start gap-2 mb-2">
                    <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">Reality</div>
                  </div>
                  <p className="text-sm text-slate-900 font-medium">{item.reality}</p>
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
          className="mt-16 text-center bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 sm:p-12 shadow-2xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
            Get a free consultation with Evanam experts. We'll show you exactly how integrated systems can boost your revenue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.evanam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-emerald-700 hover:bg-emerald-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Schedule Free Consultation
            </a>
            <button
              onClick={() => document.getElementById('roi-calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Calculate Your ROI
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
