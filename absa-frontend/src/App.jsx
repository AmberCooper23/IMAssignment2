import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//COMPONENT IMPORTS
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

//PAGE IMPORTS
import LandingPage from './pages/LandingPage/LandingPage'
import MoneySnapshot from './pages/MoneySnapshot/MoneySnapshot'
import StrategyTrack from './pages/StrategyTrackPage/StrategyTrack'
import SimulationLab from './pages/SimulationLab/SimulationLab'
import ProgressMap from './pages/ProgressMap/ProgressMap'
import SimulationDetail from './pages/SimulationDetails/SimulationDetail'

//CONTEXT IMPORTS
import { FinanceProvider } from './context/FinanceContext';
import { GoalsProvider } from './context/GoalsContext';
import { StrategyTrackProvider } from './context/StrategyTrackContext'

function App() {

  return (
    <FinanceProvider>
      <GoalsProvider>
      <StrategyTrackProvider>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/moneySnapshot" element={<MoneySnapshot />} />
      <Route path="/strategyTrack" element={<StrategyTrack />} />
      <Route path="/simulationLab" element={<SimulationLab/>} />
      <Route path="/progressMap" element={<ProgressMap/>}/>
      <Route path="/simulation/luxury-car-vs-investments" element={<SimulationDetail />} />

    </Routes>
    <Footer />
    </BrowserRouter>
      </StrategyTrackProvider>

      </GoalsProvider>
      
    </FinanceProvider>
    
  )
}

export default App
