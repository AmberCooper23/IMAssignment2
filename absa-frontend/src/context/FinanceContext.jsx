import React, { createContext, useState } from "react";

const FinanceContext = createContext();

function FinanceProvider({children}) {

    // Income & deductions
        const [income, setIncome] = useState(10);
        const [tax, setTax] = useState(10);
        const [ra, setRa] = useState(10);
        const [medicalAid, setMedicalAid] = useState(100);

    // Savings & Investments
        const [savingsRate, setSavingsRate] = useState(0);
        const [emergencyFund, setEmergencyFund] = useState(20);
        const [tfsa, setTfsa] = useState(0);
        const [investments, setInvestments] = useState(0);

    // Debt
        const [studentLoan, setStudentLoan] = useState(0);
        const [homeLoan, setHomeLoan] = useState(0);
        const [personalLoan, setPersonalLoan] = useState(0);
        const [carLoan, setCarLoan] = useState(0);

    // Derived values
        const takeHome = income - tax - ra - medicalAid;
        const totalDebt = studentLoan + homeLoan + personalLoan + carLoan;
        const deductions = tax + ra + medicalAid;
        const totalSavings = emergencyFund + tfsa + investments;

        return (
            <FinanceContext.Provider
            value={{
                income, setIncome,
                tax, setTax,
                ra, setRa, 
                medicalAid, setMedicalAid,
                savingsRate, setSavingsRate,
                emergencyFund, setEmergencyFund,
                tfsa, setTfsa,
                investments, setInvestments,
                studentLoan, setStudentLoan,
                homeLoan, setHomeLoan,
                personalLoan, setPersonalLoan,
                carLoan, setCarLoan,
                takeHome,
                totalDebt,
                deductions,
                totalSavings
            }}
            >
                {children}
            </FinanceContext.Provider>
        );
}

export default FinanceContext;
export {FinanceProvider};