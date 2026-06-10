import React from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const buildGraphData = (salary, localAllocation, offshoreAllocation, localReturn, offshoreReturn, timeHorizon) => {
  const data = [];
  const monthlyContribution = salary * 0.2;
  const totalAllocation = localAllocation + offshoreAllocation;
  const localWeight = localAllocation / totalAllocation;
  const offshoreWeight = offshoreAllocation / totalAllocation;

  const localMonthlyRate = localReturn / 100 / 12;
  const offshoreMonthlyRate = offshoreReturn / 100 / 12;

  const futureValue = (contribution, rate, months) =>
    rate === 0
      ? contribution * months
      : contribution * ((Math.pow(1 + rate, months) - 1) / rate);

  for (let year = 0; year <= timeHorizon; year++) {
    const months = year * 12;
    const localGrowth = futureValue(monthlyContribution * localWeight, localMonthlyRate, months);
    const offshoreGrowth = futureValue(monthlyContribution * offshoreWeight, offshoreMonthlyRate, months);
    data.push({
      year: `Yr ${year}`,
      local: localGrowth,
      offshore: offshoreGrowth,
      total: localGrowth + offshoreGrowth
    });
  }

  return data;
};

function LocalVsOffshoreGraph({ salary, localAllocation, offshoreAllocation, localReturn, offshoreReturn, timeHorizon }) {
  const data = buildGraphData(salary, localAllocation, offshoreAllocation, localReturn, offshoreReturn, timeHorizon);

  return (
    <div className="graphContainer">
      <h3>Local vs Offshore Growth</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis tickFormatter={(v) => `R${(v / 1000).toFixed(0)}K`} />
          <Tooltip formatter={(v) => `R${v.toLocaleString()}`} />
          <Legend />
          <Line type="monotone" dataKey="local" stroke="#71aef3" strokeWidth={2} name="Local Growth" />
          <Line type="monotone" dataKey="offshore" stroke="#f2bc60" strokeWidth={2} name="Offshore Growth" />
          <Line type="monotone" dataKey="total" stroke="#22972a" strokeWidth={2} name="Total Portfolio" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LocalVsOffshoreGraph;
