import React, { useContext } from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import FinanceContext from "../../context/FinanceContext";

function IncomeBreakdownDonut() {
  const { income, tax, ra, medicalAid } = useContext(FinanceContext);

  const takeHome = Math.max(income - (tax + ra + medicalAid), 0);

  const data = [
    { name: "Tax", value: tax, color: "#e74c3c" },
    { name: "Retirement Annuity", value: ra, color: "#f0ad4e" },
    { name: "Medical Aid", value: medicalAid, color: "#5bc0de" },
    { name: "Take Home", value: takeHome, color: "#5cb85c" }
  ];

  const total = data.reduce((sum, e) => sum + e.value, 0);
  const dataWithPercent = data.map(e => ({
    ...e,
    percent: total > 0 ? ((e.value / total) * 100).toFixed(1) : 0
  }));

  return (
    <article className="incomePieChartWrapper">
      <section className="chartWithStats">
        <PieChart width={400} height={300} className="incomeDonut">
          <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Pie>
          <Legend layout="horizontal" align="center" verticalAlign="bottom" />
        </PieChart>
        <ul className="percentList">
          {dataWithPercent.map((entry, index) => (
            <li key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.percent}%
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default IncomeBreakdownDonut;
