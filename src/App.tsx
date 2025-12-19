import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { ProcureToPay } from './sections/ProcureToPay'
import { OrderToCash } from './sections/OrderToCash'
import { Implementation } from './sections/Implementation'
import { ERPStats } from './sections/ERPStats'
import { ROICalculator } from './sections/ROICalculator'
import { ERPQuiz } from './sections/ERPQuiz'
import { DownloadResources } from './sections/DownloadResources'
import { UseCases } from './sections/UseCases'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProcureToPay />
        <OrderToCash />
        <Implementation />
        <ERPStats />
        <ROICalculator />
        <ERPQuiz />
        <DownloadResources />
        <UseCases />
      </main>
      <Footer />
    </div>
  )
}

export default App
