import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import evanamLogo from '../assets/Evanam Logo.png'

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-3 group"
            >
              <img
                src={evanamLogo}
                alt="Evanam Consulting"
                className="h-10 w-auto transition-all duration-300"
              />
              <div className={`border-l pl-3 transition-colors duration-300 ${
                isScrolled ? 'border-gray-300' : 'border-white/30'
              }`}>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
                }`}>
                  ERP Education
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button
                onClick={() => scrollToSection('hero')}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-primary'
                    : 'text-white hover:text-green-300 drop-shadow-md'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('p2p')}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-primary'
                    : 'text-white hover:text-green-300 drop-shadow-md'
                }`}
              >
                P2P
              </button>
              <button
                onClick={() => scrollToSection('o2c')}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-primary'
                    : 'text-white hover:text-green-300 drop-shadow-md'
                }`}
              >
                O2C
              </button>
              <button
                onClick={() => scrollToSection('implementation')}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-primary'
                    : 'text-white hover:text-green-300 drop-shadow-md'
                }`}
              >
                Implementation
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className={`font-medium transition-colors duration-300 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-brand-primary'
                    : 'text-white hover:text-green-300 drop-shadow-md'
                }`}
              >
                Use Cases
              </button>
              <a
                href="https://www.evanam.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold py-2 px-6 rounded-lg transition-all duration-300 ${
                  isScrolled
                    ? 'bg-brand-primary hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
                    : 'bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-2 border-white/50'
                }`}
              >
                Contact Evanam
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 right-0 z-40 md:hidden bg-white shadow-xl"
          >
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('p2p')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Procure-to-Pay (P2P)
              </button>
              <button
                onClick={() => scrollToSection('o2c')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Order-to-Cash (O2C)
              </button>
              <button
                onClick={() => scrollToSection('implementation')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Implementation
              </button>
              <button
                onClick={() => scrollToSection('use-cases')}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Use Cases
              </button>
              <a
                href="https://www.evanam.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-brand-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Contact Evanam
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
