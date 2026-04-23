import React, { useState, useContext } from "react";
import "./SimulationDetail.css";
import SimulationSlider from "../../components/SimulationSlider/SimulationSlider";
import SimulationOutputCard from "../../components/SimulationOutputCard/SimulationOutputCard";
import VerdictTile from "../../components/VerdictTiles/VerdictTile";
import FinanceContext from "../../context/FinanceContext";

function SimulationDetail() {
    const { income } = useContext(FinanceContext);

    const [salary, setSalary] = useState(income || 45000);
    const [carPayment, setCarPayment] = useState(8000);
    const [investmentReturn, setInvestmentReturn] = useState(9);
    const [carDepreciation, setCarDepreciation] = useState(15);
    const [timeHorizon, setTimeHorizon] = useState(5);
    const [hasRun, setHasRun] = useState(false);

    const carValueLost = Math.round(carPayment * 12 * timeHorizon);

    const investmentGrowth = (() => {
        const monthlyRate = investmentReturn / 100 / 12;
        const months = timeHorizon * 12;
        if (monthlyRate === 0) return carPayment * months;
        return Math.round(carPayment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate));
    })();

    const opportunityCost = investmentGrowth - carValueLost;
    const carAsPercentOfSalary = Math.round((carPayment / salary) * 100);

    const getVerdict = () => {
        if (carAsPercentOfSalary > 25) return {
            type: "warning",
            headline: "Your car is a wealth drain.",
            pros: [
                "Immediate lifestyle satisfaction",
                "Reliable transport and social status"
            ],
            cons: [
                "High monthly outflow reduces savings capacity",
                "Depreciation erodes value quickly",
                `Opportunity cost: investing R${carPayment.toLocaleString()}/mo could grow to R${investmentGrowth.toLocaleString()} over ${timeHorizon} years`
            ],
            solution: "Consider scaling down to a car payment under 15% of salary, or redirecting part of the payment into investments."
        };
        if (carAsPercentOfSalary > 15) return {
            type: "caution",
            headline: "Your car is eating into your future.",
            pros: [
                "Manageable if income grows steadily",
                "Allows partial investing alongside car ownership"
            ],
            cons: [
                "Slower wealth accumulation",
                "Less flexibility for emergencies or opportunities"
            ],
            solution: "Rebalance by trimming car costs or boosting investment contributions. Aim to keep transport under 15% of salary."
        };
        return {
            type: "good",
            headline: "Your car cost is manageable.",
            pros: [
                "Sustainable monthly cost",
                "Leaves room for savings and investments"
            ],
            cons: [
                `Still represents opportunity cost: investing the difference could unlock R${investmentGrowth.toLocaleString()} over ${timeHorizon} years`
            ],
            solution: "Stay disciplined: continue investing consistently while keeping car costs stable."
        };
    };

    const verdict = getVerdict();

    const handleSliderChange = (setter) => (value) => {
        setter(value);
        setHasRun(false);
    };

    return (
        <main className="simulationDetail">
            <header className="simulationDetailHeader">
                <h1 className="simulationTitle">Luxury Car vs Invest the Difference</h1>
                <p className="simulationSubtitle">
                    See the real opportunity cost of your car finance — what that monthly payment could become if invested instead.
                </p>
                <article className="simulationInsightCard">
                    <h2 className="insightCardTitle">Experiment with Confidence</h2>
                    <p className="insightCardBody">
                        This simulation uses South African financial context — car depreciation rates, JSE returns, and real financing costs — to show you what your dream car actually costs over 5 years.
                    </p>
                </article>
            </header>

            <section className="sliderRow">
                <article className="sliderCard">
                    <SimulationSlider
                        label="Monthly Salary"
                        value={salary}
                        min={15000}
                        max={150000}
                        step={1000}
                        onChange={handleSliderChange(setSalary)}
                        formatValue={(v) => `R${v.toLocaleString()}`}
                    />
                </article>
                <article className="sliderCard">
                    <SimulationSlider
                        label="Monthly Car Payment"
                        value={carPayment}
                        min={1000}
                        max={30000}
                        step={500}
                        onChange={handleSliderChange(setCarPayment)}
                        formatValue={(v) => `R${v.toLocaleString()}`}
                    />
                </article>
                <article className="sliderCard">
                    <SimulationSlider
                        label="Investment Return (JSE avg ~9%)"
                        value={investmentReturn}
                        min={4}
                        max={15}
                        step={0.5}
                        onChange={handleSliderChange(setInvestmentReturn)}
                        formatValue={(v) => `${v}%`}
                    />
                </article>
                <article className="sliderCard">
                    <SimulationSlider
                        label="Car Depreciation / yr"
                        value={carDepreciation}
                        min={5}
                        max={25}
                        step={1}
                        onChange={handleSliderChange(setCarDepreciation)}
                        formatValue={(v) => `${v}%`}
                    />
                </article>
                <article className="sliderCard">
                    <SimulationSlider
                        label="Time Horizon"
                        value={timeHorizon}
                        min={1}
                        max={10}
                        step={1}
                        onChange={handleSliderChange(setTimeHorizon)}
                        formatValue={(v) => `${v} yrs`}
                    />
                </article>
            </section>

            <section className="runButtonRow">
                <button
                    className={`runButton ${hasRun ? "runButtonRan" : ""}`}
                    onClick={() => setHasRun(true)}
                >
                    {hasRun ? "✓ Simulation Run" : "Run Simulation →"}
                </button>
            </section>

            {hasRun && (
                <section className="resultsSection">
                    <section className="outputCardsRow">
                        <SimulationOutputCard
                            label="Total Car Cost"
                            value={`R${carValueLost.toLocaleString()}`}
                            subtitle={`Over ${timeHorizon} year${timeHorizon > 1 ? "s" : ""}`}
                            accent="red"
                        />
                        <SimulationOutputCard
                            label="If Invested Instead"
                            value={`R${investmentGrowth.toLocaleString()}`}
                            subtitle={`At ${investmentReturn}% return`}
                            accent="green"
                        />
                        <SimulationOutputCard
                            label="Opportunity Cost"
                            value={`R${opportunityCost.toLocaleString()}`}
                            subtitle="Lost growth potential"
                            accent="dark"
                        />
                    </section>

                    <VerdictTile
                        type={verdict.type}
                        headline={verdict.headline}
                        pros={verdict.pros}
                        cons={verdict.cons}
                        solution={verdict.solution}
                    />
                </section>
            )}
        </main>
    );
}

export default SimulationDetail;
