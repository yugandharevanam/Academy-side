import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import {
  ShoppingBagIcon,
  CubeIcon,
  TruckIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export const OrderToCash = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      icon: <ShoppingBagIcon className="w-16 h-16" />,
      title: 'Order Entry',
      description: "Customer's order is captured in the system",
      details: 'Sales order is created, possibly after a quote or shopping cart checkout. ERP can automatically check customer credit.'
    },
    {
      icon: <CubeIcon className="w-16 h-16" />,
      title: 'Order Fulfillment',
      description: 'Product or service is prepared',
      details: 'For goods: picking/packing in warehouse. For services: scheduling delivery. Inventory is allocated in real-time.'
    },
    {
      icon: <TruckIcon className="w-16 h-16" />,
      title: 'Shipping/Delivery',
      description: 'Product is shipped to customer',
      details: 'Tracking information is generated and customer is notified. ERP updates order status automatically.'
    },
    {
      icon: <DocumentTextIcon className="w-16 h-16" />,
      title: 'Customer Invoicing',
      description: 'Invoice is generated and sent',
      details: 'ERP creates invoice based on order details and sends it to the customer, detailing amount due.'
    },
    {
      icon: <BanknotesIcon className="w-16 h-16" />,
      title: 'Payment Collection',
      description: 'Customer pays the invoice',
      details: 'Payment is recorded in Accounts Receivable. ERP marks invoice as paid and updates financial records.'
    }
  ]

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  return (
    <SectionContainer id="o2c" background="white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Order-to-Cash (O2C)
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From Customer Order to Cash in Hand
        </p>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          O2C encompasses all steps from when a customer places an order to the moment the business receives
          payment. It's the sales lifecycle in process form.
        </p>
      </motion.div>

      {/* Interactive Carousel */}
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-brand-secondary/10 to-brand-primary/10 rounded-3xl p-12 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-8 text-brand-primary"
              >
                {steps[currentStep].icon}
              </motion.div>

              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                {steps[currentStep].title}
              </h3>
              <p className="text-xl text-gray-700 mb-4 font-medium">
                {steps[currentStep].description}
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {steps[currentStep].details}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevStep}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-brand-primary"
            aria-label="Previous step"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          <button
            onClick={nextStep}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:scale-110 transition-all text-brand-primary"
            aria-label="Next step"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Step Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentStep ? 'w-12 bg-brand-primary' : 'w-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Step Labels */}
        <div className="grid grid-cols-5 gap-2 mt-6">
          {steps.map((step, index) => (
            <button
              key={step.title}
              onClick={() => setCurrentStep(index)}
              className={`text-sm p-2 rounded transition-colors ${
                index === currentStep
                  ? 'bg-brand-primary text-white font-semibold'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {step.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 bg-white border-2 border-brand-secondary/30 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">Why O2C is Important</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-blue-50 rounded-xl">
            <h4 className="font-semibold text-lg mb-3 text-brand-primary">For Engineers</h4>
            <p className="text-gray-700">
              Understanding O2C gives you insight into order management systems – crucial if you work on
              e-commerce or any product delivery software. It's the core of how a sale moves through a company's
              system.
            </p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl">
            <h4 className="font-semibold text-lg mb-3 text-brand-secondary">For Businesses</h4>
            <p className="text-gray-700">
              Optimizing O2C improves cash flow and customer satisfaction. A faster O2C means getting paid sooner
              and happier customers through timely fulfillment.
            </p>
          </div>
        </div>
        <p className="text-center mt-6 text-gray-600 italic">
          "An efficient O2C cycle not only improves cash flow but also boosts customer satisfaction through timely
          fulfillment"
        </p>
      </motion.div>
    </SectionContainer>
  )
}
