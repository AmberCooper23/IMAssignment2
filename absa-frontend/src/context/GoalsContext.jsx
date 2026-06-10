import React, { createContext, useState } from "react";

const GoalsContext = createContext();

function GoalsProvider({ children }) {
  const [goalEmergencyFund, setGoalEmergencyFund] = useState(210000);
  const [goalSavingsRate, setGoalSavingsRate] = useState(30);
  const [goalInvestments, setGoalInvestments] = useState(150000);
  const [goalTfsaAnnual, setGoalTfsaAnnual] = useState(46000);
  const [goalTfsaLifetime, setGoalTfsaLifetime] = useState(500000);
  const [goalDebtFreeYear, setGoalDebtFreeYear] = useState(2032);

  const currentYear = new Date().getFullYear();
  const yearsUntilDebtFree =
    goalDebtFreeYear > currentYear ? goalDebtFreeYear - currentYear : null;

  const tfsaAnnualProgress = (currentTfsa) =>
    goalTfsaAnnual > 0 ? (currentTfsa / goalTfsaAnnual) * 100 : null;

  const tfsaLifetimeProgress = (currentTfsa) =>
    goalTfsaLifetime > 0 ? (currentTfsa / goalTfsaLifetime) * 100 : null;

  const emergencyFundProgress = (currentEmergencyFund) =>
    goalEmergencyFund > 0
      ? (currentEmergencyFund / goalEmergencyFund) * 100
      : null;

  const investmentsProgress = (currentInvestments) =>
    goalInvestments > 0 ? (currentInvestments / goalInvestments) * 100 : null;

  const savingsRateGap = (currentSavingsRate) =>
    goalSavingsRate > 0 ? goalSavingsRate - currentSavingsRate : null;

  return (
    <GoalsContext.Provider
      value={{
        goalEmergencyFund,
        setGoalEmergencyFund,
        goalSavingsRate,
        setGoalSavingsRate,
        goalInvestments,
        setGoalInvestments,
        goalTfsaAnnual,
        setGoalTfsaAnnual,
        goalTfsaLifetime,
        setGoalTfsaLifetime,
        goalDebtFreeYear,
        setGoalDebtFreeYear,
        yearsUntilDebtFree,
        tfsaAnnualProgress,
        tfsaLifetimeProgress,
        emergencyFundProgress,
        investmentsProgress,
        savingsRateGap,
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

export default GoalsContext;
export { GoalsProvider };
