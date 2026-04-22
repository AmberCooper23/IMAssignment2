import React, { createContext, useState } from "react";

const GoalsContext = createContext();

function GoalsProvider({ children }) {
  // GOALS
  const [goalEmergencyFund, setGoalEmergencyFund] = useState(0);
  const [goalSavingsRate, setGoalSavingsRate] = useState(0);
  const [goalInvestments, setGoalInvestments] = useState(0);
  const [goalTfsaAnnual, setGoalTfsaAnnual] = useState(0);
  const [goalTfsaLifetime, setGoalTfsaLifetime] = useState(0);
  const [goalDebtFreeYear, setGoalDebtFreeYear] = useState(0);

  // DERIVED VALUES
  const currentYear = new Date().getFullYear();
  const yearsUntilDebtFree =
    goalDebtFreeYear > currentYear ? goalDebtFreeYear - currentYear : 0;

  const tfsaAnnualProgress = (currentTfsa) =>
    goalTfsaAnnual > 0 ? (currentTfsa / goalTfsaAnnual) * 100 : 0;

  const tfsaLifetimeProgress = (currentTfsa) =>
    goalTfsaLifetime > 0 ? (currentTfsa / goalTfsaLifetime) * 100 : 0;

  const emergencyFundProgress = (currentEmergencyFund) =>
    goalEmergencyFund > 0 ? (currentEmergencyFund / goalEmergencyFund) * 100 : 0;

  const investmentsProgress = (currentInvestments) =>
    goalInvestments > 0 ? (currentInvestments / goalInvestments) * 100 : 0;

  const savingsRateGap = (currentSavingsRate) =>
    goalSavingsRate > 0 ? goalSavingsRate - currentSavingsRate : 0;

  return (
    <GoalsContext.Provider
      value={{
        goalEmergencyFund, setGoalEmergencyFund,
        goalSavingsRate, setGoalSavingsRate,
        goalInvestments, setGoalInvestments,
        goalTfsaAnnual, setGoalTfsaAnnual,
        goalTfsaLifetime, setGoalTfsaLifetime,
        goalDebtFreeYear, setGoalDebtFreeYear,
        yearsUntilDebtFree,
        tfsaAnnualProgress,
        tfsaLifetimeProgress,
        emergencyFundProgress,
        investmentsProgress,
        savingsRateGap
      }}
    >
      {children}
    </GoalsContext.Provider>
  );
}

export default GoalsContext;
export { GoalsProvider };
