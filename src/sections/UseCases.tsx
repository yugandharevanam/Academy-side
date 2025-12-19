import { motion } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import { AcademicCapIcon, BriefcaseIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

export const UseCases = () => {
  const studentBenefits = [
    'Hands-on ERP experience makes you stand out to employers',
    'Learn to optimize processes using real data',
    'Understand how different engineering roles intersect with business processes',
    'Gain marketable skills in enterprise software',
    'Open career paths: ERP consultant, business analyst, operations manager'
  ]

  const businessBenefits = [
    'Reduce operational overhead through automation',
    'Avoid costly errors like duplicate orders or forgotten invoices',
    'Real-time visibility into business health',
    'Scale operations smoothly without chaos',
    'Focus on strategy while ERP handles routine tasks'
  ]

  return (
    <SectionContainer id="use-cases" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          How ERP Knowledge Benefits You
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Tailored insights for engineering students and business owners
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Engineering Students Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center text-white">
              <AcademicCapIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Engineering Students</h3>
          </div>

          <div className="mb-6 p-6 bg-white rounded-xl">
            <h4 className="font-semibold text-lg mb-3 text-brand-primary">Student Story</h4>
            <p className="text-gray-700 leading-relaxed">
              Meet <strong>Arjun</strong>, an engineering student working on a senior project. His team is tasked
              with improving a manufacturing process. Arjun uses an ERP simulation to map the factory's
              procure-to-pay and order-to-cash cycles, identifying bottlenecks in supply delivery and cash
              collection. By understanding the ERP data, he proposes a solution that reduces inventory delays.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">What You'll Gain</h4>
            <ul className="space-y-3">
              {studentBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-4 bg-blue-900 text-white rounded-lg">
            <p className="text-sm italic">
              "Ever wondered how your code or engineering solution fits into the bigger business picture? ERP is
              that bigger picture."
            </p>
          </div>
        </motion.div>

        {/* Business Owners Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-brand-secondary rounded-full flex items-center justify-center text-white">
              <BriefcaseIcon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Business Owners</h3>
          </div>

          <div className="mb-6 p-6 bg-white rounded-xl">
            <h4 className="font-semibold text-lg mb-3 text-brand-secondary">Business Story</h4>
            <p className="text-gray-700 leading-relaxed">
              Meet <strong>Priya</strong>, who runs a growing e-commerce startup. As orders poured in, she
              struggled to keep track of inventory and invoices across spreadsheets. She implemented an ERP system
              and now her Order-to-Cash process is automated: customers get their orders faster, and Priya gets
              paid on time. She can even track sales trends weekly on her ERP dashboard, helping her make smarter
              stock purchases.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-gray-800">Key Benefits for Owners</h4>
            <ul className="space-y-3">
              {businessBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircleIcon className="w-6 h-6 text-brand-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="mt-6 p-4 bg-green-900 text-white rounded-lg">
            <p className="text-sm italic">
              "ERP can free you from day-to-day chaos and help you be more strategic. Focus on what matters –
              strategy and growth – while ERP handles the routine."
            </p>
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-12 text-white text-center shadow-2xl"
      >
        <h3 className="text-3xl font-bold mb-6">Ready to Dive Deeper or Take Action?</h3>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're looking to learn more about ERP or implement it in your business, we're here to help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.evanam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            For Business Owners: Get a Consultation
          </a>
          <a
            href="https://www.evanam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-dark hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            For Students: Explore More Resources
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
