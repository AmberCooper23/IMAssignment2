import React, { useState, useContext } from "react";
import "../SimulationDetails/SimulationDetail.css";
import SimulationSlider from "../../components/SimulationSlider/SimulationSlider";
import VerdictTile from "../../components/VerdictTiles/VerdictTile";
import FinanceContext from "../../context/FinanceContext";
import PropertyVsRentGraph from "../../components/PropertyVsRentGraph/PropertyVsRentGraph";

import propertySimLabBanner from "../../assets/PropertySimLabBanner.png";

function PropertySimLab() {
  const { income } = useContext(FinanceContext);
  const [salary, setSalary] = useState(income || 30000);
  const [propertyPrice, setPropertyPrice] = useState(1_000_000);
  const [rentPerMonth, setRentPerMonth] = useState(12_000);
  const [mortgageRate, setMortgageRate] = useState(11);
  const [investmentReturn, setInvestmentReturn] = useState(9);
  const [timeHorizon, setTimeHorizon] = useState(10);

  const calcMortgagePayment = (price) => {
    const deposit = price * 0.1;
    const loan = price - deposit;
    const monthlyRate = mortgageRate / 100 / 12;
    const months = timeHorizon * 12;
    return Math.round(
      (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)),
    );
  };

  const monthlyMortgage = calcMortgagePayment(propertyPrice);
  const totalRent = rentPerMonth * timeHorizon * 12;
  const totalMortgage = monthlyMortgage * timeHorizon * 12;

  const monthlySaving = monthlyMortgage - rentPerMonth;
  const monthlyRateInv = investmentReturn / 100 / 12;
  const months = timeHorizon * 12;
  const investmentGrowth =
    monthlyRateInv === 0
      ? monthlySaving * months
      : Math.round(
          monthlySaving *
            ((Math.pow(1 + monthlyRateInv, months) - 1) / monthlyRateInv),
        );

  const verdict = {
    type: monthlyMortgage < rentPerMonth ? "good" : "bad",
    headline:
      monthlyMortgage < rentPerMonth
        ? "Buying property builds equity."
        : "Renting may free up cash for investing.",
    pros: [
      `Mortgage payment: R${monthlyMortgage.toLocaleString()} (${Math.round(
        (monthlyMortgage / salary) * 100,
      )}% of income)`,
      `Rent payment: R${rentPerMonth.toLocaleString()} (${Math.round(
        (rentPerMonth / salary) * 100,
      )}% of income)`,
      `Investment growth if renting: R${investmentGrowth.toLocaleString()}`,
    ],
    cons: [
      `Total mortgage cost over ${timeHorizon} yrs: R${totalMortgage.toLocaleString()}`,
      `Total rent cost over ${timeHorizon} yrs: R${totalRent.toLocaleString()}`,
    ],
    solution:
      monthlyMortgage < rentPerMonth
        ? "Owning property builds long-term equity and stability."
        : "Renting plus investing the difference could grow wealth faster.",
  };

  return (
    <main className="simulationDetail">
      <header className="simulationHeader">
        <h1>Buying Property vs Renting</h1>
        <p>Compare the long-term costs of owning versus renting.</p>
      </header>

      <div className="simulationGrid">
        <aside className="inputsPanel">
          <figure className="simLabBanner">
            <img
              src={propertySimLabBanner}
              alt="A house with keys and rental contract."
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
                <label>Property Price</label>
                <label>Monthly Rent</label>
              </div>
              <div className="CarRow">
                <div className="withPrefix">
                  <span className="prefix">R</span>
                  <input
                    type="number"
                    value={propertyPrice}
                    onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  />
                </div>
                <div className="withPrefix">
                  <span className="prefix">R</span>
                  <input
                    type="number"
                    value={rentPerMonth}
                    onChange={(e) => setRentPerMonth(Number(e.target.value))}
                  />
                </div>
              </div>
            </section>

            <section className="CarInputs">
              <div className="CarRow">
                <label>Mortgage Interest Rate</label>
                <label>Investment Return</label>
              </div>
              <div className="CarRow">
                <div className="withSuffix">
                  <input
                    type="number"
                    value={mortgageRate}
                    onChange={(e) => setMortgageRate(Number(e.target.value))}
                  />
                  <span className="suffix">%</span>
                </div>
                <div className="withSuffix">
                  <input
                    type="number"
                    value={investmentReturn}
                    onChange={(e) =>
                      setInvestmentReturn(Number(e.target.value))
                    }
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
              Monthly mortgage:{" "}
              <strong>R{monthlyMortgage.toLocaleString()}</strong>
            </p>
            <p>
              Monthly rent: <strong>R{rentPerMonth.toLocaleString()}</strong>
            </p>
          </div>

          <PropertyVsRentGraph
            monthlyMortgage={monthlyMortgage}
            rentPerMonth={rentPerMonth}
            monthlySaving={monthlySaving}
            investmentReturn={investmentReturn}
            timeHorizon={timeHorizon}
          />

          <div className="carComparisonContainer">
            <div className="carComparison">
              <div className="carBlock">
                <h3>Buying Property</h3>
                <p>Monthly mortgage: R{monthlyMortgage.toLocaleString()}</p>
                <p>Total mortgage cost: R{totalMortgage.toLocaleString()}</p>
              </div>
              <div className="carBlock">
                <h3>Renting</h3>
                <p>Monthly rent: R{rentPerMonth.toLocaleString()}</p>
                <p>Total rent cost: R{totalRent.toLocaleString()}</p>
                <p>
                  Investment growth (if difference invested): R
                  {investmentGrowth.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

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

export default PropertySimLab;
