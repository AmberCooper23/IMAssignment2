import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

//COMPONENT IMPORTS
import NavBar from './components/NavBar/NavBar'

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
    </BrowserRouter>
  )
}

export default App
