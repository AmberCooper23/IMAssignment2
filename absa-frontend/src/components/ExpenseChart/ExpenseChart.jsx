import React, { useContext } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import FinanceContext from "../../context/FinanceContext";
import "./ExpenseChart.css";

function ExpenseBreakdownDonut() {
  const { tax, medicalAid, ra, studentLoan, homeLoan, personalLoan, carLoan, emergencyFund, tfsa, investments, deductions, totalDebt, totalSavings } = useContext(FinanceContext);

  const groupData = [
    { name: "Deductions", value: deductions, color: "#d9534f" },
    { name: "Debt", value: totalDebt, color: "#f0ad4e" },
    { name: "Savings & Investments", value: totalSavings, color: "#5bc0de" }
  ];

  const detailedExpenses = [
    { label: "Tax", value: tax, color: "#d9534f" },
    { label: "Medical Aid", value: medicalAid, color: "#d9534f" },
    { label: "Retirement Annuity", value: ra, color: "#d9534f" },
    { label: "Student Loan", value: studentLoan, color: "#f0ad4e" },
    { label: "Home Loan", value: homeLoan, color: "#f0ad4e" },
    { label: "Personal Loan", value: personalLoan, color: "#f0ad4e" },
    { label: "Car Loan", value: carLoan, color: "#f0ad4e" },
    { label: "Emergency Fund", value: emergencyFund, color: "#5bc0de" },
    { label: "TFSA", value: tfsa, color: "#5bc0de" },
    { label: "Investments", value: investments, color: "#5bc0de" }
  ];

  const totalDetailed = detailedExpenses.reduce((sum, e) => sum + e.value, 0);
  const expensesWithPercent = detailedExpenses.map(e => ({
    ...e,
    percent: totalDetailed > 0 ? ((e.value / totalDetailed) * 100).toFixed(1) : 0
  }));

  return (
    <article className="expensePieChartWrapper">
      <section className="chartWithStats">
        <PieChart width={400} height={300} className="expenseDonut">
          <Pie data={groupData} cx="50%" cy="50%" outerRadius={100} dataKey="value">
            {groupData.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </PieChart>
        <ul className="percentList">
          {expensesWithPercent.map((entry, index) => (
            <li key={index} style={{ color: entry.color }}>
              {entry.label}: {entry.percent}%
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default ExpenseBreakdownDonut;
