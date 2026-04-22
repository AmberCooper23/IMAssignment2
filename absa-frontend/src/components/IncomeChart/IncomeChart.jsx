// IncomeBreakdownDonut.jsx
import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import FinanceContext from "../../context/FinanceContext";

function IncomeBreakdownDonut() {
  const { income, tax, ra, medicalAid, takeHome } = useContext(FinanceContext);

  const data = [
    { name: "Tax", value: tax },
    { name: "RA", value: ra },
    { name: "Medical Aid", value: medicalAid },
    { name: "Take Home", value: takeHome }
  ];

const COLORS = ["#d9534f", "#f0ad4e", "#5bc0de", "#5cb85c"];
  return (
    <article className="incomePieChartWrapper">
    <PieChart width={400} height={300} className="incomeDonut">
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

export default IncomeBreakdownDonut;
