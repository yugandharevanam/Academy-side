import { useState } from 'react'
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  BriefcaseIcon,
  HeartIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  DocumentTextIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

const industries = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: BuildingOfficeIcon,
    accent: 'from-blue-600 via-blue-700 to-blue-900',
    textColor: 'text-blue-500',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1cdf81921-1764654292439.png',
    imageAlt:
      'Modern manufacturing facility with automated assembly line machinery and workers in safety gear monitoring production processes',
    challenge:
      'Complex production planning with multiple product lines, managing bill of materials, tracking WIP inventory, and coordinating a global supply chain.',
    solution:
      'Connected production planning with real-time material tracking, automated scheduling, quality controls, and supplier collaboration workflows.',
    results: [
      { metric: '35%', label: 'Reduction in production lead time' },
      { metric: '28%', label: 'Lower inventory carrying costs' },
      { metric: '42%', label: 'Improvement in on-time delivery' }
    ],
    keyFeatures: [
      'Bill of Materials (BOM) management',
      'Production scheduling & capacity planning',
      'Shop floor control with visibility',
      'Quality management integration'
    ]
  },
  {
    id: 'retail',
    name: 'Retail & Distribution',
    icon: ShoppingBagIcon,
    accent: 'from-amber-500 via-orange-500 to-rose-600',
    textColor: 'text-amber-500',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_16d12ccdc-1764794606714.png',
    imageAlt:
      'Busy retail store interior with customers shopping among well-organized displays and modern point-of-sale systems',
    challenge:
      'Managing inventory across locations, syncing promotions/pricing, handling seasonal demand, and keeping loyalty programs current.',
    solution:
      'Multi-location inventory with automated replenishment, centralized pricing, integrated POS, and customer loyalty intelligence.',
    results: [
      { metric: '45%', label: 'Reduction in stockouts' },
      { metric: '32%', label: 'Boost in inventory turnover' },
      { metric: '25%', label: 'Growth in customer retention' }
    ],
    keyFeatures: [
      'Multi-channel inventory visibility',
      'Centralized pricing & promotions',
      'Integrated POS and CRM',
      'Demand forecasting & planning'
    ]
  },
  {
    id: 'services',
    name: 'Professional Services',
    icon: BriefcaseIcon,
    accent: 'from-emerald-500 via-emerald-600 to-teal-700',
    textColor: 'text-emerald-500',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_19ed7b82d-1764843649706.png',
    imageAlt:
      'Business team collaborating in a modern office with laptops and documents discussing project strategies',
    challenge:
      'Tracking project profitability, managing resources across engagements, capturing time/expenses, and billing accurately.',
    solution:
      'Project accounting with time/expense capture, resource planning dashboard, milestone billing, and analytics.',
    results: [
      { metric: '40%', label: 'Higher project profitability' },
      { metric: '50%', label: 'Fewer billing errors' },
      { metric: '30%', label: 'Improved resource utilization' }
    ],
    keyFeatures: [
      'Project accounting & costing',
      'Time and expense automation',
      'Resource allocation dashboards',
      'Client collaboration portal'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartIcon,
    accent: 'from-rose-500 via-pink-600 to-amber-500',
    textColor: 'text-rose-500',
    image:
      'https://img.rocket.new/generatedImages/rocket_gen_img_1ea53d9e0-1764664295709.png',
    imageAlt:
      'Healthcare professionals reviewing patient records on digital tablets in a modern hospital',
    challenge:
      'Managing medical supplies, billing rules, compliance reporting, and coordinating care across departments.',
    solution:
      'Inventory with expiry tracking, integrated billing & claims, compliance dashboards, and care coordination tools.',
    results: [
      { metric: '38%', label: 'Less supply waste' },
      { metric: '45%', label: 'Faster insurance claims' },
      { metric: '52%', label: 'Improved compliance reporting' }
    ],
    keyFeatures: [
      'Medical inventory with expiry management',
      'Patient billing & insurance integration',
      'Compliance reporting',
      'Department coordination tools'
    ]
  }
]

const IndustryShowcaseSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('manufacturing')
  const currentIndustry = industries.find((industry) => industry.id === selectedIndustry)

  return (
    <section id="industry-showcase" className="py-20 lg:py-32 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full text-xs font-semibold tracking-widest uppercase">
            <span className="text-emerald-700">Reality Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Industry-Specific ERP Transformations
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Explore real scenarios where ERP brings measurable operational wins, whether it is manufacturing, retail, services, or healthcare.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setSelectedIndustry(industry.id)}
              className={`rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide transition border ${
                selectedIndustry === industry.id
                  ? 'bg-slate-900 text-white border-transparent shadow-lg'
                  : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {industry.name}
            </button>
          ))}
        </div>

        {currentIndustry && (
          <div className="space-y-10">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-200">
                <div className="h-64 sm:h-80 overflow-hidden">
                  <img
                    src={currentIndustry.image}
                    alt={currentIndustry.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${currentIndustry.accent}`}
                    >
                      <currentIndustry.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{currentIndustry.name}</h3>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <ExclamationTriangleIcon className="w-5 h-5 text-amber-600" />
                        <h4 className="text-lg font-semibold text-slate-900">Industry Challenge</h4>
                      </div>
                      <p className="text-slate-600">{currentIndustry.challenge}</p>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <LightBulbIcon className="w-5 h-5 text-emerald-600" />
                        <h4 className="text-lg font-semibold text-slate-900">ERP Solution</h4>
                      </div>
                      <p className="text-slate-600">{currentIndustry.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
                  <h4 className="text-xl font-semibold text-slate-900 mb-5">Measurable Results</h4>
                  <div className="space-y-5">
                    {currentIndustry.results.map((result) => {
                      const widthValue = parseInt(result.metric, 10) || 0
                      return (
                        <div key={result.label} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className={`text-3xl font-bold ${currentIndustry.textColor}`}>{result.metric}</span>
                            <span className="text-xs uppercase tracking-widest text-slate-500">{result.label}</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div
                              className={`h-2 ${currentIndustry.textColor} rounded-full transition-all duration-700`}
                              style={{ width: `${widthValue}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-lg">
                  <h4 className="text-xl font-semibold text-slate-900 mb-5">Key ERP Features</h4>
                  <ul className="space-y-4">
                    {currentIndustry.keyFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircleIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8 text-center shadow-xl">
              <DocumentTextIcon className="w-10 h-10 mx-auto text-emerald-600 mb-4" />
              <h4 className="text-2xl font-semibold text-slate-900 mb-3">
                Want the {currentIndustry.name} ERP guide?
              </h4>
              <p className="text-slate-600 mb-6">
                Download a practical guide with real case studies, rollout checklists, and ROI benchmarks tailored to this industry.
              </p>
              <button className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white shadow-lg hover:bg-emerald-700 transition-colors">
                <span>Download {currentIndustry.name} Guide</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default IndustryShowcaseSection
