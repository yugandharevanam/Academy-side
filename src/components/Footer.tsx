import evanamLogo from '../assets/Evanam Logo.png'

export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img
              src={evanamLogo}
              alt="Evanam Consulting"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <h3 className="text-xl font-bold mb-2">Evanam Consulting</h3>
            <p className="text-gray-300">
              Turning complex systems into simple, scalable growth engines
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.evanam.com" className="text-gray-300 hover:text-white transition-colors">
                  Main Website
                </a>
              </li>
              <li>
                <a href="https://www.evanam.com" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="https://www.evanam.com" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Learning Resources</h4>
            <p className="text-gray-300 text-sm">
              This educational site is designed to help engineering students and business owners
              understand ERP systems and their practical applications.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Evanam Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
