import React from "react";
import "./SimulationLab.css";
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
            <section className="simulationLabFilters">
                {/* Simulation Lab Filters */}
            </section>

            <section className="simulationLabCardContainer">
                <SimulationLabCard
                title="Property vs Renting"
                category="Property"
                description="Compare buying property vs renting in JHB or CPT over 5 years"
                />
                <SimulationLabCard
                title="Luxury Car vs Invest"
                category="Lifestyle"
                description="See the opportunity cost of luxury car finance vs investing the difference"
                />
                <SimulationLabCard
                title="Local vs Offshore"
                category="Investments"
                description="Compare local JSE investments vs offshore USD/EUR allocation"
                />
                <SimulationLabCard
                title="RA Tax Benefits"
                category="Tax"
                description="Calculate how RA contributions reduce your SARS tax burden"
                />
                <SimulationLabCard
                title="Emergency Fund Builder"
                category="Savings"
                description="Determine your idea emergency fund size for your lifestyle"
                />
                <SimulationLabCard
                title="Debt Payoff Strategy"
                category="Debt"
                description="Optimise student loan vs car finance repayment strategy"
                />
            </section>

            <section className="insights">
                <h1 className="insightsTitle">
                    Quick Insights from the Lab
                </h1>
                <section className="insightCards">
                    {/* Insight Cards */}
                </section>
            </section>
        </main>
    );
}

export default SimulationLab