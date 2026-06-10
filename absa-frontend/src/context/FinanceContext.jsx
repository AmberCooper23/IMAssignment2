import React, { createContext, useState } from "react";

const FinanceContext = createContext();

function FinanceProvider({ children }) {
  const [income, setIncome] = useState(70000);
  const [tax, setTax] = useState(19357);
  const [ra, setRa] = useState(11000);
  const [medicalAid, setMedicalAid] = useState(9000);

  const [savingsRate, setSavingsRate] = useState(25);
  const [emergencyFund, setEmergencyFund] = useState(150000);
  const [tfsa, setTfsa] = useState(36000);
  const [investments, setInvestments] = useState(50000);
  const [offshoreInvestments, setOffshoreInvestments] = useState(5000);

  const [studentLoan, setStudentLoan] = useState(0);
  const [studentLoanOriginal] = useState(150000);
  const [studentLoanPayment, setStudentLoanPayment] = useState(0);

  const [homeLoan, setHomeLoan] = useState(1200000);
  const [homeLoanOriginal] = useState(1500000);
  const [homeLoanPayment, setHomeLoanPayment] = useState(16000);

  const [carLoan, setCarLoan] = useState(12000);
  const [carLoanOriginal] = useState(24000);
  const [carLoanPayment, setCarLoanPayment] = useState(2200);

  const [personalLoan, setPersonalLoan] = useState(0);
  const [personalLoanOriginal] = useState(0);
  const [personalLoanPayment, setPersonalLoanPayment] = useState(0);

  const takeHome = income - tax - ra - medicalAid;
  const totalDebt = studentLoan + homeLoan + carLoan + personalLoan;
  const deductions = tax + ra + medicalAid;
  const totalSavings = emergencyFund + tfsa + investments;
  const offshorePercent =
    investments > 0 ? (offshoreInvestments / investments) * 100 : 0;

  return (
    <FinanceContext.Provider
      value={{
        income,
        setIncome,
        tax,
        setTax,
        ra,
        setRa,
        medicalAid,
        setMedicalAid,
        savingsRate,
        setSavingsRate,
        emergencyFund,
        setEmergencyFund,
        tfsa,
        setTfsa,
        investments,
        setInvestments,
        offshoreInvestments,
        setOffshoreInvestments,
        studentLoan,
        setStudentLoan,
        studentLoanOriginal,
        studentLoanPayment,
        setStudentLoanPayment,
        homeLoan,
        setHomeLoan,
        homeLoanOriginal,
        homeLoanPayment,
        setHomeLoanPayment,
        carLoan,
        setCarLoan,
        carLoanOriginal,
        carLoanPayment,
        setCarLoanPayment,
        personalLoan,
        setPersonalLoan,
        personalLoanOriginal,
        personalLoanPayment,
        setPersonalLoanPayment,
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
