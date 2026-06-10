import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const buildGraphData = (
  standardCarPayment,
  luxuryCarPayment,
  monthlySaving,
  investmentReturn,
  timeHorizon,
) => {
  const data = [];
  const monthlyRateInv = investmentReturn / 100 / 12;

  for (let year = 0; year <= timeHorizon; year++) {
    const months = year * 12;
    const standardCarCost = standardCarPayment * months;
    const luxuryCarCost = luxuryCarPayment * months;
    const investmentValue =
      monthlyRateInv === 0
        ? monthlySaving * months
        : monthlySaving *
          ((Math.pow(1 + monthlyRateInv, months) - 1) / monthlyRateInv);

    data.push({
      year: `Yr ${year}`,
      standardCar: standardCarCost,
      luxuryCar: luxuryCarCost,
      investment: investmentValue,
    });
  }

  return data;
};

function CostVsInvestmentGraph({
  standardCarPayment,
  luxuryCarPayment,
  monthlySaving,
  investmentReturn,
  timeHorizon,
}) {
  const data = buildGraphData(
    standardCarPayment,
    luxuryCarPayment,
    monthlySaving,
    investmentReturn,
    timeHorizon,
  );

  return (
    <div className="graphContainer">
      <h3>Cost vs Investment Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `R${(v / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(v) => `R${v.toLocaleString()}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="investment"
            stroke="#22972a"
            strokeWidth={2}
            name="Investment Growth"
          />
          <Line
            type="monotone"
            dataKey="luxuryCar"
            stroke="#f2bc60"
            strokeWidth={2}
            name="Luxury Car Cost"
          />
          <Line
            type="monotone"
            dataKey="standardCar"
            stroke="#71aef3"
            strokeWidth={2}
            name="Standard Car Cost"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default CostVsInvestmentGraph;
