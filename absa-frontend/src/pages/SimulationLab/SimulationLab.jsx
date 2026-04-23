import React from "react";
import "./SimulationLab.css";
import InsightCard from "../../components/InsightCard/InsightCard";
import SimulationLabCard from "../../components/SimulationLabCards/SimulationLabCard";

function SimulationLab() {
    return (
        <main className="simulationLab">
            <header className="simulationLabHeader">
                <h1 className="simulationLabTitle">
                    Simulation Lab
                </h1>
                <p className="simulationLabSubtitle">
                    Test financial decisions with interactive scenarios and see the 5 year impact!
                </p>
            </header>

            <section className="overviewCard">
                <h2 className="overviewCardTitle">
                    Experiment with Confidence!
                </h2>
                <p className="overviewCardText">
                    Each simulation uses South African financial context - SARS rates, property markets, JSE vs offshore returns - to give you realistic forecasts. Play with the inputs to see how different choices impact your journey.
                </p>
            </section>

            <section className="simulationLabCardContainer">
                <SimulationLabCard
                    title="Property vs Renting"
                    category="Property"
                    description="Compare buying property vs renting in JHB or CPT over 5 years"
                    ready={false}
                />
                <SimulationLabCard
                    title="Luxury Car vs Invest"
                    category="Lifestyle"
                    description="See the opportunity cost of luxury car finance vs investing the difference"
                    to="/simulation/luxury-car-vs-investments"
                    ready={true}
                />
                <SimulationLabCard
                    title="Local vs Offshore"
                    category="Investments"
                    description="Compare local JSE investments vs offshore USD/EUR allocation"
                    ready={false}
                />
                <SimulationLabCard
                    title="RA Tax Benefits"
                    category="Tax"
                    description="Calculate how RA contributions reduce your SARS tax burden"
                    ready={false}
                />
                <SimulationLabCard
                    title="Emergency Fund Builder"
                    category="Savings"
                    description="Determine your idea emergency fund size for your lifestyle"
                    ready={false}
                />
                <SimulationLabCard
                    title="Debt Payoff Strategy"
                    category="Debt"
                    description="Optimise student loan vs car finance repayment strategy"
                    ready={false}
                />
            </section>

            <section className="insights">
                <h1 className="insightsTitle">
                    Quick Insights from the Lab
                </h1>
                <section className="insightCardContainer">
                    <InsightCard 
                        title="Property vs Rent"
                        description="In JHB buying costs ~R200k more upfront but builds R300k equity. Renting saves R500k liquid."
                        className="blueCard"
                    />
                    <InsightCard
                        title="Car Finance Impact"
                        description="A R6.5k/month car costs R600k in lost investment growth over 5 years at 10% returns."
                        className="greenCard"
                    />
                    <InsightCard
                        title="Offshore Diversification"
                        description="A 30% offshore allocation could add R80k to your portfolio if Rand weakens 15% over 5 years."
                        className="orangeCard"
                    />
                </section>
            </section>
        </main>
    );
}

export default SimulationLab;
