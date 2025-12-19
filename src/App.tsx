import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { MythsVsReality } from './sections/MythsVsReality'
import IndustryShowcaseSection from './sections/industryshowcase'
import { BusinessProcesses } from './sections/BusinessProcesses'
import { Implementation } from './sections/Implementation'
import { ROICalculator } from './sections/ROICalculator'
import { DownloadResources } from './sections/DownloadResources'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <MythsVsReality />
        <IndustryShowcaseSection />
        <BusinessProcesses />
        <Implementation />
        <ROICalculator />
        <DownloadResources />
      </main>
      <Footer />
    </div>
  )
}

export default App
