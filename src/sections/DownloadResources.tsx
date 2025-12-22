import { motion } from 'framer-motion'
import { SectionContainer } from '../components/SectionContainer'
import {
  DocumentArrowDownIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import ShimmerButton from '../Animation/ShimmerButton'

interface Resource {
  title: string
  description: string
  icon: React.ElementType
  audience: 'students' | 'business' | 'both'
  fileSize: string
  pages: string
}

const resources: Resource[] = [
  {
    title: 'ERP Fundamentals Cheat Sheet',
    description: 'Quick reference guide covering key ERP concepts, terminology, and core modules',
    icon: BookOpenIcon,
    audience: 'students',
    fileSize: '2.3 MB',
    pages: '4 pages'
  },
  {
    title: 'Procure-to-Pay Process Guide',
    description: 'Step-by-step breakdown of the P2P cycle with real-world examples',
    icon: ClipboardDocumentCheckIcon,
    audience: 'both',
    fileSize: '1.8 MB',
    pages: '6 pages'
  },
  {
    title: 'Order-to-Cash Workflow',
    description: 'Complete O2C process documentation with best practices',
    icon: ChartBarIcon,
    audience: 'both',
    fileSize: '2.1 MB',
    pages: '5 pages'
  },
  {
    title: 'ERP Implementation Checklist',
    description: 'Comprehensive checklist for planning and executing ERP projects',
    icon: ClipboardDocumentCheckIcon,
    audience: 'business',
    fileSize: '1.5 MB',
    pages: '8 pages'
  },
  {
    title: 'ROI Calculation Worksheet',
    description: 'Excel template for estimating ERP return on investment',
    icon: ChartBarIcon,
    audience: 'business',
    fileSize: '850 KB',
    pages: '1 sheet'
  },
  {
    title: 'ERP Study Guide for Students',
    description: 'Complete study material covering all major ERP concepts and exam prep',
    icon: AcademicCapIcon,
    audience: 'students',
    fileSize: '3.2 MB',
    pages: '12 pages'
  }
]

export const DownloadResources = () => {
  const handleDownload = (title: string) => {
    // In a real implementation, this would trigger actual file download
    alert(`Downloading: ${title}\n\nNote: This is a demo. In production, this would download a real PDF/Excel file.`)
  }

  const getAudienceBadge = (audience: string) => {
    if (audience === 'students') {
      return (
        <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
          <AcademicCapIcon className="w-3 h-3" />
          Students
        </span>
      )
    } else if (audience === 'business') {
      return (
        <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
          <BriefcaseIcon className="w-3 h-3" />
          Business
        </span>
      )
    } else {
      return (
        <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
          All
        </span>
      )
    }
  }

  return (
    <SectionContainer id="download-resources" background="white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-brand-secondary/10 text-brand-secondary px-4 py-2 rounded-full mb-4">
          <DocumentArrowDownIcon className="w-5 h-5" />
          <span className="text-sm font-semibold">Free Resources</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Download Learning Materials
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Free guides, cheat sheets, and templates to accelerate your ERP learning journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => {
          const Icon = resource.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-brand-primary to-brand-secondary p-3 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {getAudienceBadge(resource.audience)}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{resource.fileSize}</span>
                  <span>•</span>
                  <span>{resource.pages}</span>
                </div>

                <ShimmerButton
                  background="linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)"
                  shimmerColor="rgba(255, 255, 255, 0.6)"
                  shimmerDuration="2s"
                  borderRadius="0.75rem"
                  onClick={() => handleDownload(resource.title)}
                  className="w-full text-white font-semibold py-3 px-4 flex items-center justify-center gap-2"
                >
                  <DocumentArrowDownIcon className="w-5 h-5" />
                  Download Free
                </ShimmerButton>
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
        <div className="bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Need Custom ERP Training?
          </h3>
          <p className="text-gray-600 mb-6">
            Evanam Consulting offers tailored ERP training programs for teams and organizations
          </p>
          <ShimmerButton
            background="linear-gradient(135deg, #10B981 0%, #059669 100%)"
            shimmerColor="rgba(255, 255, 255, 0.7)"
            shimmerDuration="2.5s"
            borderRadius="0.5rem"
            onClick={() => window.open('https://www.evanam.com', '_blank')}
            className="inline-block text-white font-bold py-3 px-8 shadow-lg"
          >
            Request Custom Training
          </ShimmerButton>
        </div>
      </motion.div>
    </SectionContainer>
  )
}
