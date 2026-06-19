import { Header } from './components/Header'
import { QuizHashOpener } from './components/quiz/QuizHashOpener'
import { QuizModal } from './components/quiz/QuizModal'
import { QuizProvider } from './context/QuizContext'
import { useGsapAnimations } from './hooks/useGsapAnimations'
import { useHashNavigation } from './hooks/useHashNavigation'
import { Contact } from './sections/Contact'
import { Estimate } from './sections/Estimate'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Materials } from './sections/Materials'
import { Portfolio } from './sections/Portfolio'
import { PriceFactors } from './sections/PriceFactors'
import { Process } from './sections/Process'
import { Promo } from './sections/Promo'
import { ProjectGallery } from './sections/ProjectGallery'
import { RepairDirections } from './sections/RepairDirections'
import { Reviews } from './sections/Reviews'
import { ServiceAreas } from './sections/ServiceAreas'
import { Services } from './sections/Services'

function App() {
  useGsapAnimations()
  useHashNavigation()

  return (
    <QuizProvider>
      <QuizHashOpener />
      <Header />
      <main>
        <Hero />
        <Services />
        <RepairDirections />
        <Estimate />
        <PriceFactors />
        <Portfolio />
        <ProjectGallery />
        <Materials />
        <Process />
        <Promo />
        <Reviews />
        <ServiceAreas />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <QuizModal />
    </QuizProvider>
  )
}

export default App
