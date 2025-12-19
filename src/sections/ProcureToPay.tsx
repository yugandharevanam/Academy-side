import { motion } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import {
  DocumentTextIcon,
  ShoppingCartIcon,
  TruckIcon,
  DocumentCheckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'

export const ProcureToPay = () => {
  const steps = [
    {
      icon: <DocumentTextIcon className="w-12 h-12" />,
      title: 'Purchase Requisition',
      description: 'An employee requests a product or service they need',
      detail: 'The ERP system captures the need and routes it for approval'
    },
    {
      icon: <ShoppingCartIcon className="w-12 h-12" />,
      title: 'Purchase Order',
      description: 'An official order is created and approved',
      detail: 'ERP ensures the PO is approved by a manager before sending to vendor'
    },
    {
      icon: <TruckIcon className="w-12 h-12" />,
      title: 'Goods Receipt',
      description: 'Ordered goods or services are received and verified',
      detail: 'Warehouse teams verify the delivery matches the order in the ERP'
    },
    {
      icon: <DocumentCheckIcon className="w-12 h-12" />,
      title: 'Invoice Processing',
      description: "Vendor's invoice is received and matched with the order",
      detail: 'ERP automatically matches invoice to PO and receipt'
    },
    {
      icon: <CurrencyDollarIcon className="w-12 h-12" />,
      title: 'Payment',
      description: 'Accounts payable issues payment to the vendor',
      detail: 'Payment is recorded and the cycle is completed in the ERP'
    }
  ]

  return (
    <SectionContainer id="p2p" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Procure-to-Pay (P2P)
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Purchase Request to Vendor Payment
        </p>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          P2P is the process of requisitioning, purchasing, receiving, and paying for goods/services within a business.
          In ERP, this is an integrated workflow connecting the procurement department and accounts payable.
        </p>
      </motion.div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-primary/20" />

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="flex-1 md:w-1/2">
                <div className={`bg-white rounded-xl shadow-lg p-8 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700 mb-2 font-medium">{step.description}</p>
                  <p className="text-gray-600 text-sm">{step.detail}</p>
                </div>
              </div>

              {/* Icon */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-xl"
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block flex-1 md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-2xl p-8 text-white"
      >
        <h3 className="text-2xl font-bold mb-4">Why P2P Matters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
          <div>
            <h4 className="font-semibold mb-2">For Engineering Students</h4>
            <p>Understanding P2P is key to designing efficient supply chains. Learn how different departments interact and data flows through the system.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">For Business Owners</h4>
            <p>An ERP-based P2P process reduces manual paperwork, prevents maverick spending, and provides real-time visibility into every dollar spent.</p>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
