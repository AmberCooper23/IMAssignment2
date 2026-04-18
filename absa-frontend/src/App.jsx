import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'


function App() {

  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
