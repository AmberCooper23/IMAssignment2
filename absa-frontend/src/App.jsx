import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//COMPONENT IMPORTS
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

//PAGE IMPORTS
import LandingPage from './pages/LandingPage/LandingPage'
import MoneySnapshot from './pages/MoneySnapshot/MoneySnapshot'
import StrategyTrack from './pages/StrategyTrackPage/StrategyTrack'
import SimulationLab from './pages/SimulationLab/SimulationLab'

//CONTEXT IMPORTS
import { FinanceProvider } from './context/FinanceContext';

function App() {

  return (
    <FinanceProvider>
      <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/moneySnapshot" element={<MoneySnapshot />} />
      <Route path="/strategyTrack" element={<StrategyTrack />} />
      <Route path="/simulationLab" element={<SimulationLab/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </FinanceProvider>
    
  )
}

export default App
