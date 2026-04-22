// expenseBreakdownDonut.jsx
import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import FinanceContext from "../../context/FinanceContext";

function ExpenseBreakdownDonut() {
  const { expense, deductions, totalDebt, totalSavings } = useContext(FinanceContext);

  const data = [
    { name: "Deductions", value: deductions },
    { name: "Debt", value: totalDebt },
    { name: "Savings & Investments", value: totalSavings },
  ];

const COLORS = ["#d9534f", "#f0ad4e", "#5bc0de", "#5cb85c"];
  return (
    <article className="expensePieChartWrapper">
    <PieChart width={400} height={300} className="expenseDonut">
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
    </article>
  );
}

export default ExpenseBreakdownDonut;
