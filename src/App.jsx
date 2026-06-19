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
import { Process } from './sections/Process'
import { Promo } from './sections/Promo'
import { Reviews } from './sections/Reviews'
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
        <Estimate />
        <Portfolio />
        <Materials />
        <Process />
        <Promo />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <QuizModal />
    </QuizProvider>
  )
}

export default App
