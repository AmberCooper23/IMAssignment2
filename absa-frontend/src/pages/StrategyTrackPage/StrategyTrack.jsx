import React from "react";
import CTACard from "../../components/ctaCard/ctaCard";
import "./StrategyTrack.css";

function StrategyTrack() {
    return (
        <main className="strategyTrack">
        <header className="strategyTrackHeader">
            <h1 className="strategyTrackTitle">Strategy Track</h1>
            <p className="strategyTrackSubtitle">
                Choose your financial archetype and follow a curated 5 year plan
            </p>
        </header>

        <section className="chooseJourney">
            <h1 className="chooseJourneyTitle">
                Choose Your Journey
            </h1>
            <ul className="chooseJourneyText">
            <li>
                Each track is designed for different financial goals and priorities. Select the one that resonates with your current situation and aspirations. You can switch tracks anytime as your priorities evolve.
            </li>
            </ul>
        </section>

        <section className="trackCardContainer">
            {/* Strategy Track Card */}
        </section>

        <section className="trackComparisonContainer">
            {/* Comparison Table */}
        </section>

        <section className="ctaCardContainer">
        <CTACard
        title="Money Snapshot"
        text="Review your financial character sheet before choosing a track."
        className="blueCard"
        />
        <CTACard
        title="Run Simulations"
        text="Test financial decisions with interactive scenarios."
        className="greenCard"
        />
        <CTACard
        title="Track Milestones"
        text="View your progress map and achievements."
        className="orangeCard"
        />
        </section>
        </main>
    );
}

export default StrategyTrack;