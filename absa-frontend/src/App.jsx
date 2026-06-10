import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

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
import BuilderTrack from "./pages/BuilderTrack/BuilderTrack";
import ExplorerTrack from "./pages/ExplorerTrack/ExplorerTrack";
import MaverickTrack from "./pages/MaverickTrack/MaverickTrack";
import BudgetPlan from "./pages/BudgetPlan/BudgetPlan";

import LoginPage from "./pages/LogIn/LogIn";
import Profile from "./pages/Profile/Profile";

import { FinanceProvider } from "./context/FinanceContext";
import { GoalsProvider } from "./context/GoalsContext";
import { StrategyTrackProvider } from "./context/StrategyTrackContext";

function App() {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("loggedInUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // Save/remove user in localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [user]);

  return (
    <FinanceProvider user={user}>
      <GoalsProvider>
        <StrategyTrackProvider>
          <BrowserRouter>
            <NavBar user={user} />
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/login"
                element={<LoginPage user={user} setUser={setUser} />}
              />
              <Route
                path="/profile"
                element={<Profile user={user} setUser={setUser} />}
              />
              <Route path="/simulationLab" element={<SimulationLab />} />
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

              {/* Financial context routes */}
              <Route
                path="/moneySnapshot"
                element={<MoneySnapshot user={user} />}
              />
              <Route
                path="/strategyTrack"
                element={<StrategyTrack user={user} />}
              />
              <Route
                path="/progressMap"
                element={<ProgressMap user={user} />}
              />
              <Route
                path="/tracks/builder-track"
                element={<BuilderTrack user={user} />}
              />
              <Route
                path="/tracks/explorer-track"
                element={<ExplorerTrack user={user} />}
              />
              <Route
                path="/tracks/maverick-track"
                element={<MaverickTrack user={user} />}
              />
              <Route path="/budgetPlan" element={<BudgetPlan user={user} />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </StrategyTrackProvider>
      </GoalsProvider>
    </FinanceProvider>
  );
}

export default App;
