import React, { createContext, useContext } from "react";
import FinanceContext from "./FinanceContext";

const StrategyTrackContext = createContext();

function StrategyTrackProvider({ children, user }) {
  const {
    emergencyFund,
    ra,
    income,
    offshorePercent,
    investments,
    homeLoan,
    carLoan,
    studentLoan,
    totalDebt,
  } = useContext(FinanceContext);

  // Helper: if not logged in, return 0 progress
  const progressValue = (val) => (user ? val : 0);

  const tracks = [
    {
      id: "builder",
      name: "The Builder",
      description: "First Property Path",
      milestones: [
        {
          year: 1,
          title: "Emergency Fund",
          progress: progressValue(Math.min((emergencyFund / 250000) * 100, 100)),
        },
        {
          year: 2,
          title: "Deposit Ready",
          progress: progressValue(Math.min((emergencyFund / 500000) * 100, 100)),
        },
        {
          year: 3,
          title: "Bond Approval",
          progress: progressValue(homeLoan < 1500000 ? 100 : 0),
        },
        {
          year: 4,
          title: "Property Purchase",
          progress: progressValue(homeLoan < 1200000 ? 100 : 0),
        },
        {
          year: 5,
          title: "Homeowner",
          progress: progressValue(homeLoan <= 0 ? 100 : 0),
        },
      ],
    },
    {
      id: "explorer",
      name: "The Explorer",
      description: "Balanced Lifestyle & Investing",
      milestones: [
        {
          year: 1,
          title: "RA Contributions",
          progress: progressValue(income > 0 ? Math.min((ra / income) * 100, 100) : 0),
        },
        {
          year: 2,
          title: "Balanced Portfolio",
          progress: progressValue(investments > 0 ? Math.min((investments / 200000) * 100, 100) : 0),
        },
        {
          year: 3,
          title: "Offshore Start",
          progress: progressValue(offshorePercent >= 5 ? 100 : offshorePercent * 20),
        },
        {
          year: 4,
          title: "Diversified Growth",
          progress: progressValue(investments >= 500000 ? 100 : (investments / 500000) * 100),
        },
        {
          year: 5,
          title: "20% Offshore",
          progress: progressValue(offshorePercent >= 20 ? 100 : offshorePercent * 5),
        },
      ],
    },
    {
      id: "maverick",
      name: "The Maverick",
      description: "Aggressive Global Investor",
      milestones: [
        {
          year: 1,
          title: "Max RA",
          progress: progressValue(income > 0 ? Math.min((ra / (income * 0.275)) * 100, 100) : 0),
        },
        {
          year: 2,
          title: "Offshore Allocation",
          progress: progressValue(offshorePercent),
        },
        {
          year: 3,
          title: "Tech Exposure",
          progress: progressValue(0),
        },
        {
          year: 4,
          title: "Currency Diversification",
          progress: progressValue(offshorePercent >= 15 ? 100 : offshorePercent * 6.6),
        },
        {
          year: 5,
          title: "Diversified Global Portfolio",
          progress: progressValue(offshorePercent >= 30 ? 100 : offshorePercent * 3.3),
        },
      ],
    },
  ];

  return (
    <StrategyTrackContext.Provider value={{ tracks }}>
      {children}
    </StrategyTrackContext.Provider>
  );
}

export default StrategyTrackContext;
export { StrategyTrackProvider };
