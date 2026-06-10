import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import LandingPage from "./pages/LandingPage/LandingPage";
import MoneySnapshot from "./pages/MoneySnapshot/MoneySnapshot";
import StrategyTrack from "./pages/StrategyTrackPage/StrategyTrack";
import SimulationLab from "./pages/SimulationLab/SimulationLab";
import ProgressMap from "./pages/ProgressMap/ProgressMap";
import LuxuryCarSimLab from "./pages/LuxuryCarSimLab/LuxuryCarSimLab";
import PropertySimLab from "./pages/PropertySimLab/PropertySimLab";
import LocalVsOffshoreSimLab from "./pages/LocalVsOffshoreSimLab/LocalVsOffshoreSimLab";
import FirstPropertyPath from "./pages/FirstPropertyPage/FirstProperty";
import BudgetPlan from "./pages/BudgetPlan/BudgetPlan";

import { FinanceProvider } from "./context/FinanceContext";
import { GoalsProvider } from "./context/GoalsContext";
import { StrategyTrackProvider } from "./context/StrategyTrackContext";

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
              <Route path="/simulationLab" element={<SimulationLab />} />
              <Route path="/progressMap" element={<ProgressMap />} />
              <Route
                path="/simulation/luxury-car-vs-investments"
                element={<LuxuryCarSimLab />}
              />
              <Route
                path="/simulation/property-vs-renting"
                element={<PropertySimLab />}
              />
              <Route
                path="/simulation/local-vs-offshore"
                element={<LocalVsOffshoreSimLab />}
              />
              <Route
                path="/tracks/first-property"
                element={<FirstPropertyPath />}
              />
              <Route path="/budgetPlan" element={<BudgetPlan />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StrategyTrackProvider>
      </GoalsProvider>
    </FinanceProvider>
  );
}

export default App;
