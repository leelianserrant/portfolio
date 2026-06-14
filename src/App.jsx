import { useRef } from 'react'
import { BeatProvider } from './context/BeatContext'
import useNebula from './hooks/useNebula'
import Nav from './components/layout/Nav'
import BeatBar from './components/layout/BeatBar'
import Footer from './components/layout/Footer'
import Hero from './components/hero/Hero'
import Presentation from './components/presentation/Presentation'
import Timeline from './components/timeline/Timeline'
import BilanSAE from './components/sae/BilanSAE'
import Competences from './components/competences/Competences'
import BilanStage from './components/stage/BilanStage'
import MondePro from './components/stage/MondePro'
import DecouverteSoi from './components/stage/DecouverteSoi'
import Tracklist from './components/tracklist/Tracklist'
import Deck from './components/deck/Deck'
import Fierte from './components/fierte/Fierte'
import Objectifs from './components/objectifs/Objectifs'
import ProjetsPerso from './components/projets-perso/ProjetsPerso'
import PasseportCulturel from './components/passeport/PasseportCulturel'
import Contact from './components/contact/Contact'

function Nebula() {
  const canvasRef = useRef(null)
  useNebula(canvasRef)
  return <canvas id="nebula" ref={canvasRef} />
}

function App() {
  return (
    <BeatProvider>
      <Nebula />
      <Nav />
      <Hero />
      <Presentation />
      <Timeline />
      <BilanSAE />
      <Competences />
      <BilanStage />
      <MondePro />
      <DecouverteSoi />
      <Tracklist />
      <Deck />
      <Fierte />
      <Objectifs />
      <ProjetsPerso />
      <PasseportCulturel />
      <Contact />
      <Footer />
      <BeatBar />
    </BeatProvider>
  )
}

export default App
