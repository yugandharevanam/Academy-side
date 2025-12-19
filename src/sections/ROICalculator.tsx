import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import { CalculatorIcon, ChartBarIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

export const ROICalculator = () => {
  const [employees, setEmployees] = useState(50)
  const [avgSalary, setAvgSalary] = useState(50000)
  const [manualHours, setManualHours] = useState(10)
  const [errorRate, setErrorRate] = useState(15)

  // Calculations
  const annualLaborCost = employees * avgSalary
  const manualProcessCost = (manualHours / 40) * annualLaborCost * 0.3 // 30% of time on manual tasks
  const errorCost = annualLaborCost * (errorRate / 100) * 0.1 // errors cost 10% of labor
  const totalCurrentCost = manualProcessCost + errorCost

  // With ERP - 70% efficiency gain, 70% error reduction
  const erpEfficiencyGain = manualProcessCost * 0.7
  const erpErrorReduction = errorCost * 0.7
  const totalSavings = erpEfficiencyGain + erpErrorReduction

  // ROI calculation
  const erpImplementationCost = employees * 2000 // Rough estimate
  const annualROI = ((totalSavings - (erpImplementationCost * 0.2)) / erpImplementationCost) * 100 // 20% annual maintenance
  const paybackMonths = (erpImplementationCost / (totalSavings / 12))

  return (
    <SectionContainer id="roi-calculator" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-4">
          <CalculatorIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">Interactive Tool</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          ERP ROI Calculator
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Estimate the potential return on investment for your ERP implementation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
            <ChartBarIcon className="w-6 h-6 text-brand-primary" />
            Your Company Details
          </h3>

          <div className="space-y-6">
            {/* Number of Employees */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Employees
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>10</span>
                <span className="font-bold text-brand-primary">{employees}</span>
                <span>500+</span>
              </div>
            </div>

            {/* Average Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Annual Salary ($)
              </label>
              <input
                type="range"
                min="30000"
                max="150000"
                step="5000"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>$30k</span>
                <span className="font-bold text-brand-primary">${(avgSalary / 1000).toFixed(0)}k</span>
                <span>$150k+</span>
              </div>
            </div>

            {/* Manual Process Hours */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hours/Week on Manual Processes
              </label>
              <input
                type="range"
                min="1"
                max="40"
                step="1"
                value={manualHours}
                onChange={(e) => setManualHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>1</span>
                <span className="font-bold text-brand-primary">{manualHours} hrs</span>
                <span>40</span>
              </div>
            </div>

            {/* Error Rate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Error Rate (%)
              </label>
              <input
                type="range"
                min="5"
                max="50"
                step="5"
                value={errorRate}
                onChange={(e) => setErrorRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-1">
                <span>5%</span>
                <span className="font-bold text-brand-primary">{errorRate}%</span>
                <span>50%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Estimated Results</h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-white/80">Current Annual Cost:</span>
                <span className="text-2xl font-bold">${totalCurrentCost.toLocaleString()}</span>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Annual Savings with ERP:</span>
                <span className="text-2xl font-bold text-green-300">${totalSavings.toLocaleString()}</span>
              </div>
              <div className="h-px bg-white/20"></div>
              <div className="flex justify-between items-center">
                <span className="text-white/80">Implementation Cost:</span>
                <span className="text-xl font-semibold">${erpImplementationCost.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <CurrencyDollarIcon className="w-8 h-8 text-green-500 mb-2" />
              <div className="text-3xl font-bold text-green-500 mb-1">
                {annualROI > 0 ? '+' : ''}{annualROI.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600">Annual ROI</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <ClockIcon className="w-8 h-8 text-blue-500 mb-2" />
              <div className="text-3xl font-bold text-blue-500 mb-1">
                {paybackMonths.toFixed(1)}
              </div>
              <div className="text-sm text-gray-600">Months to Payback</div>
            </motion.div>
          </div>

          {/* Assumptions */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm">Assumptions:</h4>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• 70% reduction in manual processing time</li>
              <li>• 70% reduction in errors</li>
              <li>• Implementation cost: $2,000 per employee</li>
              <li>• Annual maintenance: 20% of implementation cost</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-gray-600 mb-4">
          Ready to explore ERP implementation for your business?
        </p>
        <a
          href="https://www.evanam.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Get Expert Consultation
        </a>
      </motion.div>
    </SectionContainer>
  )
}
