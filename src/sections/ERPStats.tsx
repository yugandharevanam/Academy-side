import { motion } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import { AnimatedCounter } from '../components/AnimatedCounter'
import {
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

interface Stat {
  icon: React.ElementType
  value: number
  suffix: string
  prefix: string
  decimals: number
  label: string
  description: string
  color: string
}

const stats: Stat[] = [
  {
    icon: CurrencyDollarIcon,
    value: 53,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Positive ROI',
    description: 'Organizations report positive return on investment',
    color: 'text-green-500'
  },
  {
    icon: ArrowTrendingUpIcon,
    value: 30,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Revenue Increase',
    description: 'Average revenue growth within 3 years',
    color: 'text-blue-500'
  },
  {
    icon: CheckCircleIcon,
    value: 70,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Error Reduction',
    description: 'Decrease in manual processing errors',
    color: 'text-purple-500'
  },
  {
    icon: ClockIcon,
    value: 40,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Time Savings',
    description: 'Reduction in administrative task time',
    color: 'text-orange-500'
  },
  {
    icon: UserGroupIcon,
    value: 95,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'User Adoption',
    description: 'Employee adoption rate with proper training',
    color: 'text-indigo-500'
  },
  {
    icon: ChartBarIcon,
    value: 25,
    suffix: '%',
    prefix: '',
    decimals: 0,
    label: 'Inventory Optimization',
    description: 'Reduction in inventory carrying costs',
    color: 'text-teal-500'
  }
]

export const ERPStats = () => {
  return (
    <SectionContainer id="erp-stats" background="brand">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-4">
          <ChartBarIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">Real Impact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          ERP by the Numbers
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Data-driven results from successful ERP implementations worldwide
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`${stat.color} mb-4`}>
                  <Icon className="w-12 h-12" />
                </div>
                <div className={`text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    decimals={stat.decimals}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-4xl mx-auto">
          <p className="text-sm text-blue-900 font-medium">
            Source: Industry research from Gartner, Panorama Consulting, and Aberdeen Group studies on ERP implementation success rates and business impact metrics.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
