import React, { createContext, useState, useEffect } from "react";

const FinanceContext = createContext();

function FinanceProvider({ children, user }) {
  // Default placeholders (for logged-out users)
  const defaultFinance = {
    income: 0,
    tax: 0,
    ra: 0,
    medicalAid: 0,
    savingsRate: 0,
    emergencyFund: 0,
    tfsa: 0,
    investments: 0,
    offshoreInvestments: 0,
    studentLoan: 0,
    homeLoan: 0,
    carLoan: 0,
    personalLoan: 0,
  };

  const [financeData, setFinanceData] = useState(defaultFinance);

  // Load user-specific finance data from localStorage when logged in
  useEffect(() => {
    if (user) {
      const savedFinance = localStorage.getItem(
        `finance_${user.id || user.email}`,
      );
      if (savedFinance) {
        setFinanceData(JSON.parse(savedFinance));
      } else {
        // If no saved data, start with defaults
        setFinanceData(defaultFinance);
      }
    } else {
      // Reset to defaults when logged out
      setFinanceData(defaultFinance);
    }
  }, [user]);

  // Save finance data to localStorage whenever it changes (only if logged in)
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `finance_${user.id || user.email}`,
        JSON.stringify(financeData),
      );
    }
  }, [user, financeData]);

  // Derived values
  const takeHome =
    financeData.income -
    financeData.tax -
    financeData.ra -
    financeData.medicalAid;

  const totalDebt =
    financeData.studentLoan +
    financeData.homeLoan +
    financeData.carLoan +
    financeData.personalLoan;

  const deductions = financeData.tax + financeData.ra + financeData.medicalAid;

  const totalSavings =
    financeData.emergencyFund + financeData.tfsa + financeData.investments;

  const offshorePercent =
    financeData.investments > 0
      ? (financeData.offshoreInvestments / financeData.investments) * 100
      : 0;

  return (
    <FinanceContext.Provider
      value={{
        ...financeData,
        setFinanceData,
        takeHome,
        totalDebt,
        deductions,
        totalSavings,
        offshorePercent,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
}

export default FinanceContext;
export { FinanceProvider };
