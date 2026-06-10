// context/LearningContext.jsx
import React, { createContext } from "react";

const LearningContext = createContext();

const glossary = {
  income: "Gross salary before deductions. Starting point for budgeting.",
  tax: "Compulsory contributions to government revenue.",
  ra: "Retirement Annuity contributions. Reduce taxable income.",
  medicalAid: "Monthly medical insurance contributions.",
  savingsRate: "Percentage of income saved monthly.",
  emergencyFund: "Cash set aside for unexpected expenses.",
  tfsa: "Tax-Free Savings Account. Growth and withdrawals are tax-free.",
  investments: "Money allocated to stocks, bonds, or funds.",
  offshoreInvestments: "Investments outside South Africa for diversification.",
  studentLoan: "Debt from education financing.",
  homeLoan: "Mortgage debt for property.",
  carLoan: "Debt for vehicle financing.",
  personalLoan: "Unsecured debt, usually higher interest.",
  takeHome: "Net income after deductions.",
  totalDebt: "Sum of all outstanding loans.",
  deductions: "Total of tax, RA, and medical aid.",
  totalSavings: "Sum of emergency fund, TFSA, and investments.",
  offshorePercent: "Percentage of investments held offshore."
};

const explainers = {
  savingsRate: "Experts recommend saving at least 20% of income.",
  emergencyFund: "Aim for 3–6 months of living expenses.",
  investments: "Diversify across asset classes for stability.",
  debt: "Managing debt responsibly improves credit score."
};

const tips = [
  "Build an emergency fund covering 3–6 months of expenses.",
  "Keep debt-to-income ratio below 36%.",
  "Use RA and TFSA to maximize savings.",
  "Diversify between local and offshore investments.",
  "Review your budget monthly."
];

function LearningProvider({ children }) {
  return (
    <LearningContext.Provider value={{ glossary, explainers, tips }}>
      {children}
    </LearningContext.Provider>
  );
}

export { LearningProvider };
export default LearningContext;
