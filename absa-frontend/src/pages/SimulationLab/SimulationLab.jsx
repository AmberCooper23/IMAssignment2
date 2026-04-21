import React from "react";
import './simulationLab.css';

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
                    Experiment with Confidence
                </h2>
                <p className="overviewText">
                    Each simulation uses South African financial context - SARS rates, property markets, JSE vs offshore returns - to give you realistic forecasts. Play with the inputs to see how different choices impact your journey.
                </p>
            </section>
            <section className="simulationLabFilters">
                {/* Simulation Lab Filters */}
            </section>

            <section className="simulationLabCards">
                {/* Simulation Cards */}
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