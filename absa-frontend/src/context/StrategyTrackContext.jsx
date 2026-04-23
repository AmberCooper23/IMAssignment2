import React, { createContext, useContext } from "react";
import FinanceContext from "./FinanceContext";

const StrategyTrackContext = createContext();

function StrategyTrackProvider({ children }) {
  const {
    emergencyFund,
    ra,
    income,
    offshorePercent,
    investments,
    homeLoan,
    carLoan,
    studentLoan,
    totalDebt
  } = useContext(FinanceContext);

  const tracks = [
    {
      id: "builder",
      name: "The Builder",
      description: "First Property Path",
      milestones: [
        {
          year: 1,
          title: "Emergency Fund",
          progress: Math.min((emergencyFund / 250000) * 100, 100) 
        },
        {
          year: 2,
          title: "Deposit Ready",
          progress: Math.min((emergencyFund / 500000) * 100, 100) 
        },
        {
          year: 3,
          title: "Bond Approval",
          progress: homeLoan < 1500000 ? 100 : 0 
        },
        {
          year: 4,
          title: "Property Purchase",
          progress: homeLoan < 1200000 ? 100 : 0 
        },
        {
          year: 5,
          title: "Homeowner",
          progress: homeLoan <= 0 ? 100 : 0
        }
      ]
    },
    {
      id: "explorer",
      name: "The Explorer",
      description: "Balanced Lifestyle & Investing",
      milestones: [
        {
          year: 1,
          title: "RA Contributions",
          progress: income > 0 ? Math.min((ra / income) * 100, 100) : 0
        },
        {
          year: 2,
          title: "Balanced Portfolio",
          progress: investments > 0 ? Math.min((investments / 200000) * 100, 100) : 0
        },
        {
          year: 3,
          title: "Offshore Start",
          progress: offshorePercent >= 5 ? 100 : offshorePercent * 20 
        },
        {
          year: 4,
          title: "Diversified Growth",
          progress: investments >= 500000 ? 100 : (investments / 500000) * 100
        },
        {
          year: 5,
          title: "20% Offshore",
          progress: offshorePercent >= 20 ? 100 : offshorePercent * 5
        }
      ]
    },
    {
      id: "maverick",
      name: "The Maverick",
      description: "Aggressive Global Investor",
      milestones: [
        {
          year: 1,
          title: "Max RA",
          progress: income > 0 ? Math.min((ra / (income * 0.275)) * 100, 100) : 0 
        },
        {
          year: 2,
          title: "Offshore Allocation",
          progress: offshorePercent
        },
        {
          year: 3,
          title: "Tech Exposure",
          progress: 0 
        },
        {
          year: 4,
          title: "Currency Diversification",
          progress: offshorePercent >= 15 ? 100 : offshorePercent * 6.6
        },
        {
          year: 5,
          title: "Diversified Global Portfolio",
          progress: offshorePercent >= 30 ? 100 : offshorePercent * 3.3
        }
      ]
    }
  ];

  return (
    <StrategyTrackContext.Provider value={{ tracks }}>
      {children}
    </StrategyTrackContext.Provider>
  );
}

export default StrategyTrackContext;
export { StrategyTrackProvider };
