import { motion } from 'framer-motion'
import { Tab } from '@headlessui/react'
import { SectionContainer } from '../components/SectionContainer'
import {
  LightBulbIcon,
  CogIcon,
  CloudArrowUpIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

export const Implementation = () => {
  const implementationSteps = [
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: 'Discovery & Planning',
      description: 'Define business requirements and goals for the ERP system',
      details: 'Understanding the company\'s processes first – aligns with clarity and simplification'
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: 'Vendor Selection & Customization',
      description: 'Choose the right ERP system and plan configurations',
      details: 'Select from SAP, Oracle, Microsoft Dynamics, or industry-specific solutions'
    },
    {
      icon: <CloudArrowUpIcon className="w-8 h-8" />,
      title: 'Data Migration',
      description: 'Migrate existing data into the new system',
      details: 'Ensure data cleanliness and integrity for customer info, products, and financial data'
    },
    {
      icon: <AcademicCapIcon className="w-8 h-8" />,
      title: 'Testing & Training',
      description: 'Test with real scenarios and train employees',
      details: 'Change management is crucial – user buy-in can make or break ERP success'
    },
    {
      icon: <RocketLaunchIcon className="w-8 h-8" />,
      title: 'Deployment & Support',
      description: 'Go live and provide continuous support',
      details: 'Phase the rollout to manage risk, then fine-tune and improve continuously'
    }
  ]

  const benefits = [
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Centralized Information & Real-Time Insights',
      description: 'All data in one system means no more disjointed spreadsheets. Management can get up-to-date reports anytime, leading to better decision-making.'
    },
    {
      icon: <ClockIcon className="w-8 h-8" />,
      title: 'Process Efficiency & Automation',
      description: 'ERP automates routine tasks and streamlines workflows. Users report reducing manual errors by ~70% after implementation.'
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Improved Collaboration',
      description: 'Departments share a single system, breaking down silos. Sales knows inventory levels, finance sees purchase orders.'
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Standardization & Compliance',
      description: 'ERP enforces standardized procedures across the company, embedding best practices and ensuring regulatory compliance.'
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
      title: 'Scalability & Growth Support',
      description: 'ERP systems are modular and can scale as a business grows, easily adding new functions and users.'
    }
  ]

  const tabs = ['Implementation Strategy', 'ERP Benefits']

  return (
    <SectionContainer id="implementation" background="brand">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          ERP Implementation & Benefits
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          How to implement ERP and why it's worth it
        </p>
      </motion.div>

      <Tab.Group>
        <Tab.List className="flex space-x-4 rounded-xl bg-white p-2 max-w-2xl mx-auto mb-12 shadow-lg">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `w-full rounded-lg py-3 px-6 text-lg font-semibold leading-5 transition-all duration-300
                ${
                  selected
                    ? 'bg-brand-primary text-white shadow-md scale-105'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {/* Implementation Strategy Panel */}
          <Tab.Panel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                  A well-implemented ERP simplifies work, not adds complexity. A carefully planned rollout
                  ensures the ERP becomes a backbone, not a burden.
                </p>

                <div className="space-y-6">
                  {implementationSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-6 p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full bg-brand-primary text-white flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-gray-900">
                          {index + 1}. {step.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-1">{step.description}</p>
                        <p className="text-gray-600 text-sm">{step.details}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Tab.Panel>

          {/* Benefits Panel */}
          <Tab.Panel>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl p-12 shadow-xl text-white mb-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold mb-2">30%</div>
                  <p className="text-xl">Average ROI increase within 3 years</p>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold mb-2">70%</div>
                  <p className="text-xl">Reduction in manual errors</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="text-brand-primary mb-4">{benefit.icon}</div>
                    <h3 className="text-lg font-bold mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 bg-white rounded-xl p-6 shadow-lg text-center">
                <p className="text-gray-700 mb-4">
                  <span className="font-semibold">For Students:</span> Knowledge of ERP systems is a marketable
                  skill. Understanding how different business functions integrate gives engineers an edge in system
                  design or analysis roles.
                </p>
              </div>
            </motion.div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <div className="bg-white rounded-xl p-8 shadow-lg inline-block">
          <p className="text-lg text-gray-700 mb-4">
            Ready to implement ERP or optimize your processes?
          </p>
          <a
            href="https://www.evanam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Contact Evanam Consulting
          </a>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
