import React, { useState, useContext } from "react";
import "../SimulationDetails/SimulationDetail.css";
import SimulationSlider from "../../components/SimulationSlider/SimulationSlider";
import VerdictTile from "../../components/VerdictTiles/VerdictTile";
import FinanceContext from "../../context/FinanceContext";
import LocalVsOffshoreGraph from "../../components/LocalVsOffshoreGraph/LocalVsOffshoreGraph";

import allocationSimLabBanner from "../../assets/AllocationSimLabBanner.png";

function LocalVsOffshoreSimLab() {
  const { income } = useContext(FinanceContext);
  const [salary, setSalary] = useState(income || 30000);
  const [localAllocation, setLocalAllocation] = useState(60);
  const [offshoreAllocation, setOffshoreAllocation] = useState(40);
  const [localReturn, setLocalReturn] = useState(8);
  const [offshoreReturn, setOffshoreReturn] = useState(12);
  const [timeHorizon, setTimeHorizon] = useState(5);

  const totalAllocation = localAllocation + offshoreAllocation;
  const localWeight = localAllocation / totalAllocation;
  const offshoreWeight = offshoreAllocation / totalAllocation;

  const monthlyContribution = salary * 0.2;

  const months = timeHorizon * 12;
  const localMonthlyRate = localReturn / 100 / 12;
  const offshoreMonthlyRate = offshoreReturn / 100 / 12;

  const futureValue = (contribution, rate, months) =>
    rate === 0
      ? contribution * months
      : contribution * ((Math.pow(1 + rate, months) - 1) / rate);

  const localGrowth = futureValue(
    monthlyContribution * localWeight,
    localMonthlyRate,
    months,
  );
  const offshoreGrowth = futureValue(
    monthlyContribution * offshoreWeight,
    offshoreMonthlyRate,
    months,
  );
  const totalGrowth = localGrowth + offshoreGrowth;

  const verdict = {
    type: offshoreGrowth > localGrowth ? "good" : "bad",
    headline:
      offshoreGrowth > localGrowth
        ? "Offshore allocation boosted returns."
        : "Local allocation provided stability.",
    pros: [
      `Local growth: R${localGrowth.toLocaleString()}`,
      `Offshore growth: R${offshoreGrowth.toLocaleString()}`,
      `Total portfolio after ${timeHorizon} yrs: R${totalGrowth.toLocaleString()}`,
    ],
    cons: [
      `Local return rate: ${localReturn}%`,
      `Offshore return rate: ${offshoreReturn}%`,
    ],
    solution:
      "Balancing local and offshore exposure helps manage risk and optimize returns.",
  };

  return (
    <main className="simulationDetail">
      <header className="simulationHeader">
        <h1>Local vs Offshore Allocations</h1>
        <p>Compare portfolio growth over 5 years with different allocations.</p>
      </header>

      <div className="simulationGrid">
        <aside className="inputsPanel">
          <figure className="simLabBanner">
            <img
              src={allocationSimLabBanner}
              alt="Global and local investment icons."
            />
          </figure>

          <section className="inputsContent">
            <SimulationSlider
              label="Monthly Income"
              value={salary}
              min={15000}
              max={150000}
              step={1000}
              onChange={setSalary}
              formatValue={(v) => `R${v.toLocaleString()}`}
            />

            <section className="CarInputs">
              <div className="CarRow">
                <label>Local Allocation %</label>
                <label>Offshore Allocation %</label>
              </div>
              <div className="CarRow">
                <div className="withSuffix">
                  <input
                    type="number"
                    value={localAllocation}
                    onChange={(e) => setLocalAllocation(Number(e.target.value))}
                  />
                  <span className="suffix">%</span>
                </div>
                <div className="withSuffix">
                  <input
                    type="number"
                    value={offshoreAllocation}
                    onChange={(e) =>
                      setOffshoreAllocation(Number(e.target.value))
                    }
                  />
                  <span className="suffix">%</span>
                </div>
              </div>
            </section>

            <section className="CarInputs">
              <div className="CarRow">
                <label>Local Return %</label>
                <label>Offshore Return %</label>
              </div>
              <div className="CarRow">
                <div className="withSuffix">
                  <input
                    type="number"
                    value={localReturn}
                    onChange={(e) => setLocalReturn(Number(e.target.value))}
                  />
                  <span className="suffix">%</span>
                </div>
                <div className="withSuffix">
                  <input
                    type="number"
                    value={offshoreReturn}
                    onChange={(e) => setOffshoreReturn(Number(e.target.value))}
                  />
                  <span className="suffix">%</span>
                </div>
              </div>
            </section>

            <SimulationSlider
              label="Time Horizon"
              value={timeHorizon}
              min={1}
              max={30}
              step={1}
              onChange={setTimeHorizon}
              formatValue={(v) => `${v} yrs`}
            />
          </section>
        </aside>

        <section className="resultsPanel">
          <div className="summaryRow">
            <p>
              Local growth: <strong>R{localGrowth.toLocaleString()}</strong>
            </p>
            <p>
              Offshore growth:{" "}
              <strong>R{offshoreGrowth.toLocaleString()}</strong>
            </p>
          </div>

          <LocalVsOffshoreGraph
            salary={salary}
            localAllocation={localAllocation}
            offshoreAllocation={offshoreAllocation}
            localReturn={localReturn}
            offshoreReturn={offshoreReturn}
            timeHorizon={timeHorizon}
          />

          <VerdictTile
            type={verdict.type}
            headline={verdict.headline}
            pros={verdict.pros}
            cons={verdict.cons}
            solution={verdict.solution}
          />
        </section>
      </div>
    </main>
  );
}

export default LocalVsOffshoreSimLab;
