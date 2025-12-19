import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import {
  DocumentTextIcon,
  ShoppingCartIcon,
  TruckIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  CubeIcon,
  BanknotesIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline'

const processes = [
  {
    name: 'Buying (Procure-to-Pay)',
    subtitle: 'How your business purchases materials and services',
    color: 'blue',
    colorClasses: {
      badge: 'bg-blue-100 text-blue-700',
      icon: 'bg-blue-600',
      line: 'bg-blue-300'
    },
    steps: [
      {
        icon: DocumentTextIcon,
        title: 'Request',
        description: 'Employee needs something',
        example: 'Factory needs raw materials'
      },
      {
        icon: ShoppingCartIcon,
        title: 'Order',
        description: 'Create and approve purchase',
        example: 'Send PO to supplier'
      },
      {
        icon: TruckIcon,
        title: 'Receive',
        description: 'Goods arrive and verified',
        example: 'Warehouse checks delivery'
      },
      {
        icon: DocumentCheckIcon,
        title: 'Match Invoice',
        description: 'Verify supplier bill',
        example: 'Auto-match invoice to order'
      },
      {
        icon: CurrencyDollarIcon,
        title: 'Pay',
        description: 'Send payment to supplier',
        example: 'Transfer funds, record in books'
      }
    ]
  },
  {
    name: 'Selling (Order-to-Cash)',
    subtitle: 'How your business sells products and gets paid',
    color: 'emerald',
    colorClasses: {
      badge: 'bg-emerald-100 text-emerald-700',
      icon: 'bg-emerald-600',
      line: 'bg-emerald-300'
    },
    steps: [
      {
        icon: ShoppingBagIcon,
        title: 'Order',
        description: 'Customer places order',
        example: 'Website order or sales call'
      },
      {
        icon: CubeIcon,
        title: 'Fulfill',
        description: 'Prepare the product',
        example: 'Pick & pack from warehouse'
      },
      {
        icon: TruckIcon,
        title: 'Ship',
        description: 'Deliver to customer',
        example: 'Track shipment in real-time'
      },
      {
        icon: DocumentTextIcon,
        title: 'Invoice',
        description: 'Send bill to customer',
        example: 'Auto-generate from order'
      },
      {
        icon: BanknotesIcon,
        title: 'Collect',
        description: 'Receive payment',
        example: 'Record payment, update accounts'
      }
    ]
  }
]

export const BusinessProcesses = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <section id="business-processes" className="py-20 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="text-purple-700">Core Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              How Modern Businesses Work
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Two essential processes that integrated systems automate - so you never lose track of purchases or sales
            </p>
          </motion.div>
        </div>

        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex gap-4 mb-12 justify-center flex-wrap">
            {processes.map((process) => (
              <Tab
                key={process.name}
                className={({ selected }) =>
                  `px-6 py-3 rounded-full font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    selected
                      ? `${process.colorClasses.badge} shadow-lg scale-105`
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`
                }
              >
                {process.name}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels>
            {processes.map((process, processIdx) => (
              <Tab.Panel key={processIdx}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-slate-50 rounded-3xl p-8 shadow-xl border border-slate-200"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{process.subtitle}</h3>
                  </div>

                  {/* Desktop: Horizontal flow */}
                  <div className="hidden md:block">
                    <div className="flex items-center justify-between gap-4">
                      {process.steps.map((step, index) => (
                        <div key={index} className="flex items-center flex-1">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex-1"
                          >
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                              <div
                                className={`w-16 h-16 ${process.colorClasses.icon} rounded-xl flex items-center justify-center mx-auto mb-4`}
                              >
                                <step.icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="text-center">
                                <div className="text-xs font-semibold text-slate-500 uppercase mb-1">
                                  Step {index + 1}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-sm text-slate-600 mb-3">{step.description}</p>
                                <div className="bg-slate-100 rounded-lg p-2 text-xs text-slate-700 italic">
                                  {step.example}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                          {index < process.steps.length - 1 && (
                            <ArrowRightIcon className="w-6 h-6 text-slate-400 mx-2 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile: Vertical flow */}
                  <div className="md:hidden space-y-4">
                    {process.steps.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200"
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 ${process.colorClasses.icon} rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <step.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs font-semibold text-slate-500 uppercase mb-1">
                              Step {index + 1}
                            </div>
                            <h4 className="font-bold text-slate-900 mb-1">{step.title}</h4>
                            <p className="text-sm text-slate-600 mb-2">{step.description}</p>
                            <div className="bg-slate-100 rounded-lg p-2 text-xs text-slate-700 italic">
                              {step.example}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Benefits callout */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className={`mt-8 ${process.colorClasses.badge} rounded-xl p-6 text-center`}
                  >
                    <p className="font-semibold">
                      {process.color === 'blue'
                        ? '⚡ With automation: Zero missed deliveries, automatic invoice matching, faster payments'
                        : '⚡ With automation: Never miss a sale, real-time inventory, faster customer payments'}
                    </p>
                  </motion.div>
                </motion.div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-red-300">❌ Without Integration</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• Manual data entry across multiple systems</li>
                <li>• Lost purchase orders and invoices</li>
                <li>• Inventory surprises (out of stock or overstocked)</li>
                <li>• Delayed customer deliveries</li>
                <li>• Payment errors and disputes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-emerald-300">✅ With Integrated System</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>• One system, automatic data flow</li>
                <li>• All documents tracked and matched</li>
                <li>• Real-time inventory across all locations</li>
                <li>• Fast, accurate order fulfillment</li>
                <li>• Automated invoicing and payment tracking</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
