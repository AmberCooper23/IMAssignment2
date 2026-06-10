import React, { useState, useContext } from "react";
import "./SimulationDetail.css";
import SimulationSlider from "../../components/SimulationSlider/SimulationSlider";
import VerdictTile from "../../components/VerdictTiles/VerdictTile";
import FinanceContext from "../../context/FinanceContext";
import CostVsInvestmentGraph from "../../components/CarVsInvestmentGraph/CarVsInvestmentGraph";

// images
import luxuryCarSimLabBanner from "../../assets/LuxuryCarSimLabBanner.png";
// import propertySimLabBanner from "../../assets/PropertySimLabBanner.png";
// import allocationSimLabBanner from "../../assets/AllocationSimLabBanner.png";

function SimulationDetail() {
  const { income } = useContext(FinanceContext);

  const [salary, setSalary] = useState(income || 30000);
  const [standardCarPrice, setStandardCarPrice] = useState(250000);
  const [luxuryCarPrice, setLuxuryCarPrice] = useState(450000);
  const [financeRate, setFinanceRate] = useState(13);
  const [investmentReturn, setInvestmentReturn] = useState(9);
  const [timeHorizon, setTimeHorizon] = useState(5);
  const [standardDepRate, setStandardDepRate] = useState(15); // % per year
  const [luxuryDepRate, setLuxuryDepRate] = useState(20); // % per year

  const calcMonthlyPayment = (price) => {
    const deposit = price * 0.1;
    const loan = price - deposit;
    const monthlyRate = financeRate / 100 / 12;
    const months = timeHorizon * 12;
    return Math.round(
      (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)),
    );
  };

  const standardCarPayment = calcMonthlyPayment(standardCarPrice);
  const luxuryCarPayment = calcMonthlyPayment(luxuryCarPrice);

  const standardCarInterest = Math.round(
    standardCarPayment * timeHorizon * 12 - standardCarPrice * 0.9,
  );
  const luxuryCarInterest = Math.round(
    luxuryCarPayment * timeHorizon * 12 - luxuryCarPrice * 0.9,
  );

  const standardCarInsurance = Math.round(
    standardCarPrice * 0.015 * timeHorizon,
  );
  const luxuryCarInsurance = Math.round(luxuryCarPrice * 0.015 * timeHorizon);

  const monthlySaving = luxuryCarPayment - standardCarPayment;

  const monthlyRateInv = investmentReturn / 100 / 12;
  const months = timeHorizon * 12;
  const investmentGrowth =
    monthlyRateInv === 0
      ? monthlySaving * months
      : Math.round(
          monthlySaving *
            ((Math.pow(1 + monthlyRateInv, months) - 1) / monthlyRateInv),
        );

  // depreciation resale values
  const standardResale = Math.round(
    standardCarPrice * Math.pow(1 - standardDepRate / 100, timeHorizon),
  );
  const luxuryResale = Math.round(
    luxuryCarPrice * Math.pow(1 - luxuryDepRate / 100, timeHorizon),
  );

  // net ownership costs
  const netStandardCost =
    standardCarPayment * months +
    standardCarInterest +
    standardCarInsurance -
    standardResale;

  const netLuxuryCost =
    luxuryCarPayment * months +
    luxuryCarInterest +
    luxuryCarInsurance -
    luxuryResale;

  const verdict = {
    type: "good",
    headline: "Choosing a standard car grows your wealth.",
    pros: [
      `Standard car costs ${Math.round((standardCarPayment / salary) * 100)}% of income`,
      `Monthly saving of R${monthlySaving.toLocaleString()} vs Luxury Car`,
      `Resale value after ${timeHorizon} yrs: R${standardResale.toLocaleString()}`,
    ],
    cons: [
      `Luxury car consumes ${Math.round((luxuryCarPayment / salary) * 100)}% of income`,
      `Extra ownership cost of R${(netLuxuryCost - netStandardCost).toLocaleString()} over ${timeHorizon} years`,
      `Resale value after ${timeHorizon} yrs: R${luxuryResale.toLocaleString()}`,
    ],
    solution: `Investing the difference could grow to R${investmentGrowth.toLocaleString()} - boosting net worth.`,
  };

  return (
    <main className="simulationDetail">
      <header className="simulationHeader">
        <h1>Luxury Car vs Invest</h1>
        <p>
          See what happens when you choose the modest car and invest the
          difference.
        </p>
      </header>

      <div className="simulationGrid">
        <aside className="inputsPanel">
          <figure className="simLabBanner">
            <img
              src={luxuryCarSimLabBanner}
              alt="Three men looking at four luxury cars parked on the grass."
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
                <label>Standard Car Price</label>
                <label>Standard Car Depreciation</label>
              </div>
              <div className="CarRow">
                <div className="withPrefix">
                  <span className="prefix">R</span>
                  <input
                    type="number"
                    value={standardCarPrice}
                    onChange={(e) =>
                      setStandardCarPrice(Number(e.target.value))
                    }
                  />
                </div>
                <div className="withSuffix">
                  <input
                    type="number"
                    value={standardDepRate}
                    onChange={(e) => setStandardDepRate(Number(e.target.value))}
                  />
                  <span className="suffix">%</span>
                </div>
              </div>
            </section>

            <section className="CarInputs">
              <div className="CarRow">
                <label>Luxury Car Price</label>
                <label>Luxury Car Depreciation</label>
              </div>
              <div className="CarRow">
                <div className="withPrefix">
                  <span className="prefix">R</span>
                  <input
                    type="number"
                    value={luxuryCarPrice}
                    onChange={(e) => setLuxuryCarPrice(Number(e.target.value))}
                  />
                </div>
                <div className="withSuffix">
                  <input
                    type="number"
                    value={luxuryDepRate}
                    onChange={(e) => setLuxuryDepRate(Number(e.target.value))}
                  />
                  <span className="suffix">%</span>
                </div>
              </div>
            </section>

            <section className="CarInputs">
              <div className="CarRow">
                <label>Finance Interest Rate</label>
                <label>Investment Return</label>
              </div>
              <div className="CarRow">
                <div className="withSuffix">
                  <input
                    type="number"
                    value={financeRate}
                    onChange={(e) => setFinanceRate(Number(e.target.value))}
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
              max={5}
              step={1}
              onChange={setTimeHorizon}
              formatValue={(v) => `${v} yrs`}
            />
          </section>
        </aside>

        <section className="resultsPanel">
          <div className="summaryRow">
            <p>
              Monthly saving (Standard Car vs Luxury Car):{" "}
              <strong>R{monthlySaving.toLocaleString()}</strong>
            </p>
            <p>
              Investment value if difference invested:{" "}
              <strong>R{investmentGrowth.toLocaleString()}</strong>
            </p>
          </div>

          <CostVsInvestmentGraph
            standardCarPrice={standardCarPrice}
            luxuryCarPrice={luxuryCarPrice}
            standardCarPayment={standardCarPayment}
            luxuryCarPayment={luxuryCarPayment}
            monthlySaving={monthlySaving}
            investmentReturn={investmentReturn}
            timeHorizon={timeHorizon}
            standardDepRate={standardDepRate}
            luxuryDepRate={luxuryDepRate}
          />

          <div className="carComparisonContainer">
            <div className="carComparison">
              <div className="carBlock">
                <h3>Standard Car: R{standardCarPrice.toLocaleString()}</h3>
                <p>Monthly payment: R{standardCarPayment.toLocaleString()}</p>
                <p>Total interest: R{standardCarInterest.toLocaleString()}</p>
                <p>
                  Insurance ({timeHorizon} yrs): R
                  {standardCarInsurance.toLocaleString()}
                </p>
                <p>Resale value: R{standardResale.toLocaleString()}</p>
                <p>Net ownership cost: R{netStandardCost.toLocaleString()}</p>
              </div>
              <div className="carBlock">
                <h3>Luxury Car: R{luxuryCarPrice.toLocaleString()}</h3>
                <p>Monthly payment: R{luxuryCarPayment.toLocaleString()}</p>
                <p>Total interest: R{luxuryCarInterest.toLocaleString()}</p>
                <p>
                  Insurance ({timeHorizon} yrs): R
                  {luxuryCarInsurance.toLocaleString()}
                </p>
                <p>Resale value: R{luxuryResale.toLocaleString()}</p>
                <p>Net ownership cost: R{netLuxuryCost.toLocaleString()}</p>
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

export default SimulationDetail;
