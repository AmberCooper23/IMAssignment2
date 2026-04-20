import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//COMPONENT IMPORTS
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

//PAGE IMPORTS
import LandingPage from './pages/LandingPage/LandingPage'
import MoneySnapshot from './pages/MoneySnapshot/MoneySnapshot'

function App() {

  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/moneySnapshot" element={<MoneySnapshot />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
